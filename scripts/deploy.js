// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
// const { abi } = require("../artifacts/contracts/exchange-protocol/dexfactory.sol/PancakeswapPair.json");
const { abi } = require("../artifacts/contracts/lottery/lottery.sol/Lottery.json");

const fs = require('fs');
const path = require('path');
const envfile = require('envfile')
const parsedFile = envfile.parse(fs.readFileSync('./frontend/.env'));
const parsedFileSdkConstant = envfile.parse(fs.readFileSync('./frontend/node_modules/@pancakeswap/sdk/dist/constants.d.ts'));

async function main() {
  const [deployer] = await ethers.getSigners();


  // get timestamp for lottery
  const currentTime = new Date();
  const currentTimeInSeconds = currentTime.getTime() / 1000;
  const lotteryEndTime = currentTimeInSeconds + 1800;
  console.log(currentTimeInSeconds);
  // get blockc number
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.testnet.fantom.network");
  const currentBlockNumber = await provider.getBlockNumber();


  // dex
  const Factory = await ethers.getContractFactory("PancakeswapFactory");
  const exchangeFactory = await Factory.deploy(deployer.address);
  await exchangeFactory.deployed();
  console.log(await exchangeFactory.INIT_CODE_PAIR_HASH());

  console.log("exchangeFactory", exchangeFactory.address)
  /* ----------- WETH -------------- */
  //deploy WETH contract for test
  const WETH = await ethers.getContractFactory("WETH9");
  const wETH = await WETH.deploy();
  await wETH.deployed();

  console.log("WETH", wETH.address)

  const Router = await ethers.getContractFactory("PancakeswapRouter");
  const exchangeRouter = await Router.deploy(exchangeFactory.address, wETH.address);
  await exchangeRouter.deployed();

  console.log("exchangeRouter", exchangeRouter.address)


  //multicall
  const Multicall = await ethers.getContractFactory("Multicall");
  const multicall = await Multicall.deploy();
  await multicall.deployed();
  console.log("multicall", multicall.address);

  //deploy tokens

  const Cake = await ethers.getContractFactory("CakeToken");
  const cake = await Cake.deploy();
  await cake.deployed();

  const Syrup = await ethers.getContractFactory("SyrupBar");
  const syrup = await Syrup.deploy(cake.address);
  await syrup.deployed();

  const Kalm = await ethers.getContractFactory("KalmToken");
  const kalm = await Kalm.deploy();
  await kalm.deployed();

  const Busd = await ethers.getContractFactory("BEP20Token");
  const busd = await Busd.deploy();
  await busd.deployed();

  console.log("cake token", cake.address);
  console.log("syrup token", syrup.address);
  console.log("kalm token", kalm.address);
  console.log("busd token", busd.address);


  //masterchef
  const MasterChef = await ethers.getContractFactory("MasterChef");
  const masterChef = await MasterChef.deploy(
    cake.address,
    syrup.address,
    deployer.address,
    40,
    currentBlockNumber,
  );
  await masterChef.deployed();

  console.log("masterchef", masterChef.address);


  //token mints

  tx = await cake.mint(deployer.address, ethers.utils.parseUnits("100000000000", 18));
  await tx.wait();
  tx = await cake.mint(syrup.address, ethers.utils.parseUnits("100000000000", 18));
  await tx.wait();
  tx = await syrup.mint(masterChef.address, ethers.utils.parseUnits("100000000000", 18));
  await tx.wait();

  tx = await wETH.deposit({ value: ethers.utils.parseUnits("21", "ether") })
  await tx.wait();
  var balance = await wETH.balanceOf(deployer.address);
  console.log(ethers.utils.formatEther(String(balance)))

  //approve
  tx = await wETH.approve(exchangeRouter.address, ethers.utils.parseUnits("20", 18));
  await tx.wait();
  tx = await cake.approve(exchangeRouter.address, ethers.utils.parseUnits("1000000", 18));
  await tx.wait();
  tx = await busd.approve(exchangeRouter.address, ethers.utils.parseUnits("1000000", 18));
  await tx.wait();

  //create LP token
  tx = await exchangeRouter.addLiquidity(
    wETH.address,
    cake.address,
    ethers.utils.parseUnits("10", 18),
    ethers.utils.parseUnits("1000000", 18),
    0,
    0,
    deployer.address,
    "111111111111111111111"
  );
  await tx.wait();

  var cakeLp = await exchangeFactory.getPair(wETH.address, cake.address);

  console.log("cake lp token", cakeLp);

  //busd lp

  tx = await exchangeRouter.addLiquidity(
    wETH.address,
    busd.address,
    ethers.utils.parseUnits("10", 18),
    ethers.utils.parseUnits("1000000", 18),
    0,
    0,
    deployer.address,
    "111111111111111111111"
  );
  await tx.wait();

  var busdLp = await exchangeFactory.getPair(wETH.address, busd.address);

  console.log("busd lp token", busdLp);


  // var cakeLpContract = new ethers.Contract(cakeLp, abi, provider);

  // const multi1 = await cake.balanceOf(cakeLp);
  // console.log("multi1", multi1);
  // const multi2 = await wETH.balanceOf(cakeLp);
  // console.log("multi2", multi2);
  // const multi3 = await cakeLpContract.balanceOf(masterChef.address);
  // console.log("multi3", multi3);
  // const multi4 = await cakeLpContract.totalSupply();
  // console.log("multi4", multi4);
  // const multi5 = await cake.decimals();
  // console.log("multi5", multi5);
  // const multi6 = await wETH.decimals();
  // console.log("multi6", multi6);

  tx = await masterChef.add(100, cakeLp, false);
  await tx.wait();
  tx = await masterChef.add(100, busdLp, false);
  await tx.wait();

  //cake vault

  const CakeVault = await ethers.getContractFactory("CakeVault");
  const cakeVault = await CakeVault.deploy(
    cake.address,
    syrup.address,
    masterChef.address,
    deployer.address,
    deployer.address
  )
  await cakeVault.deployed();

  console.log("cakevault", cakeVault.address)

  //transfer ownership for farming and pool

  tx = await cake.transferOwnership(masterChef.address);
  await tx.wait();

  tx = await syrup.transferOwnership(masterChef.address);
  await tx.wait();

  //RandomNumberGenerator deploy

  const RandomNumberGenerator = await ethers.getContractFactory("MockRandomNumberGenerator");
  const randomNumberGenerator = await RandomNumberGenerator.deploy();
  await randomNumberGenerator.deployed();

  tx = await randomNumberGenerator.setNextRandomResult(938437);
  await tx.wait();

  //Lottery deploy

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(cake.address, randomNumberGenerator.address);
  await lottery.deployed();



  //set Lottery

  tx = await lottery.setOperatorAndTreasuryAndInjectorAddresses(
    deployer.address, deployer.address, deployer.address
  );
  await tx.wait();

  tx = await lottery.startLottery(
    Number(lotteryEndTime).toFixed(0),
    ethers.utils.parseUnits("0.01", 18),
    2000,
    [250, 375, 625, 1250, 2500, 5000],
    2000
  );

  await tx.wait();

  tx = await randomNumberGenerator.setLotteryAddress(lottery.address);
  await tx.wait();

  tx = await randomNumberGenerator.changeLatestLotteryId();
  await tx.wait();

  //prediction

  const Aggregator = await ethers.getContractFactory("AggregatorV3");
  const aggregator = await Aggregator.deploy(18, 0);
  await aggregator.deployed();

  const Prediction = await ethers.getContractFactory("BnbPricePrediction");
  const prediction = await Prediction.deploy(
    aggregator.address, deployer.address, deployer.address, 1, 2, ethers.utils.parseUnits("0.01", 18,), 3600
  );
  await prediction.deployed();







  // test
  // const cakeLpContract = new ethers.Contract(cakeLp, abi, deployer);
  // var amt = await cakeLpContract.totalSupply();
  // console.log("amt", amt)
  // tx = await cakeLpContract.approve(masterChef.address, ethers.utils.parseUnits("1000", 18))
  // await tx.wait();
  // console.log("success")

  // tx = await masterChef.deposit(1, ethers.utils.parseUnits("10", 18));
  // await tx.wait();
  // tx = await masterChef.withdraw(1, ethers.utils.parseUnits("1", 18));
  // await tx.wait();

  // tx = await cake.approve(cakeVault.address, "100000000000000000000000")
  // await tx.wait();
  // console.log("suc")
  // tx = await cakeVault.deposit("100");
  // await tx.wait();
  // console.log("success");


  // import to file

  parsedFile.REACT_APP_FACTORY = exchangeFactory.address;
  parsedFile.REACT_APP_ROUTER = exchangeRouter.address;
  parsedFile.REACT_APP_MASTERCHEF = masterChef.address;
  parsedFile.REACT_APP_CAKEFAULT = cakeVault.address;
  parsedFile.REACT_APP_LOTTERY = lottery.address;
  parsedFile.REACT_APP_MULTICALL = multicall.address;
  parsedFile.REACT_APP_CHAINLINKORACLE = aggregator.address;
  parsedFile.REACT_APP_PREDICTIONS = prediction.address;
  parsedFile.REACT_APP_WBNB = wETH.address;
  parsedFile.REACT_APP_BUSD = busd.address;
  parsedFile.REACT_APP_CAKE = cake.address;
  parsedFile.REACT_APP_SYRUP = syrup.address;
  parsedFile.REACT_APP_BNBCAKELP = cakeLp;
  parsedFile.REACT_APP_BNBBUSDLP = busdLp;
  fs.writeFileSync('./frontend/.env', envfile.stringify(parsedFile, null, '\t'));

  //change addresses in sdk

  const sdkFile = fs.readFileSync("./frontend/node_modules/@pancakeswap/sdk/dist/constants.d.ts", 'utf-8');

  var result = sdkFile.replace(String(parsedFileSdkConstant["export declare const FACTORY_ADDRESS"]), `"${exchangeFactory.address}";`)
    .replace(parsedFileSdkConstant["export declare const INIT_CODE_HASH"], `"${await exchangeFactory.INIT_CODE_PAIR_HASH()}";`);

  fs.writeFileSync("./frontend/node_modules/@pancakeswap/sdk/dist/constants.d.ts", result, 'utf-8');

  //   console.log("data", data)
  //   if (err) {
  //     return console.log(err);
  //   }
  //   var result = data.replace(parsedFileSdkConstant["export declare const FACTORY_ADDRESS"], String(exchangeFactory.address))
  //     .replace(parsedFileSdkConstant["export declare const INIT_CODE_HASH"], String(exchangeFactory.INIT_CODE_PAIR_HASH()))

  //   console.log("result", result)

  //   fs.writeFile(sdkPath, result, 'utf8', function (err) {
  //     if (err) return console.log(err);
  //   });
  // });


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
