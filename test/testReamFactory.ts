/* eslint-disable node/no-missing-import */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";
import { send } from "process";
import { ReamFactory } from "../typechain";
let deployReamFactory:ReamFactory
let owner:SignerWithAddress
let addr1:SignerWithAddress
let addr2:SignerWithAddress

describe("Ream Factory", function () {
  before(
    async () => {
        const reamFactory = await ethers.getContractFactory("ReamFactory");
        deployReamFactory = await reamFactory.deploy();
        await deployReamFactory.deployed();
        [owner, addr1, addr2] = await ethers.getSigners()
       }
  )
  it("Should create a new treasury account", async function () {
    const create =  await deployReamFactory.createReamTreasury();
    // const wait = create.wait();
    const treasury = await deployReamFactory.userCreated(owner.address);
    expect(treasury).to.not.equal(false);
  });
  it("Should create a new treasury account", async function () {
    const create =  await deployReamFactory.createReamTreasury();
    // const wait = create.wait();
    const treasury = await deployReamFactory.userToReamAddr(owner.address);
    expect(treasury).to.not.equal(ethers.constants.AddressZero);
  });
  it("Should properly set admin", async function () {
    const create =  await deployReamFactory.createReamTreasury();
    // const wait = create.wait();
    const admin = await deployReamFactory.admin();
    expect(admin).to.equal(owner.address);
  });
  it("Should deposit to ream", async function () {
    const opt = {value: ethers.utils.parseEther("1.0")};
    const deposit =  await deployReamFactory.connect(owner).depositToReam(opt);
    const res = await deposit.wait();
    //@ts-ignore
    const amount = res.events[0].args[0];
    expect(amount).to.equal(ethers.utils.parseEther("1.0"));
  });
  it("Should send funds from ream", async function () {
    const bal = await owner.getBalance();
    console.log(`balance b4 ${bal}`);
    
    const opts = {value: ethers.utils.parseEther("1.0")};
    const deposit =  await deployReamFactory.connect(owner).depositToReam(opts);
    const res = await deposit.wait();
    //@ts-ignore
    const amount = res.events[0].args[0];
    console.log(amount);
    const bal2 = await owner.getBalance();
    console.log(`balance after ${bal2}`);

    const getBal = await deployReamFactory.connect(owner).getBalance();
    const getBalTx = await getBal.wait();
    // @ts-ignore
    console.log(`balance of contract when deposited ${getBalTx.events[0].args}`);
    
    const desc = "Test run"
    const to = addr1.address
  
    const sendOut =  await (await deployReamFactory.connect(owner).sendFundsFromReam("10000000000000",to,desc)).wait();
    // @ts-ignore
    console.log(sendOut.events[0].args[0]);

    const getBal2 = await deployReamFactory.connect(owner).getBalance();
    const getBalTx2 = await getBal2.wait();
   // @ts-ignore
   console.log(`balance of contract after funds sent out ${getBalTx2.events[0].args}`);
  });
  it("Should check ream address", async function () {
    const addr =  await deployReamFactory.userToReamAddr(owner.address)
  });
  it("Should check for only admin upon sendFundsFromReam", async function () {
    const desc = "Test run"
    const to = addr1.address
    const sendFund =  deployReamFactory.connect(addr1).sendFundsFromReam(10,to,desc);
    expect(sendFund).to.be.revertedWith("Only admin can perform this action");
  });
  it("Should check for only admin upon deposit", async function () {
    const desc = "Test run"
    const to = addr1.address
    const sendFund =  deployReamFactory.connect(addr1).depositToReam();
    expect(sendFund).to.be.revertedWith("Only admin can perform this action");
  });
  
});
