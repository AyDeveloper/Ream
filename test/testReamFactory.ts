/* eslint-disable prettier/prettier */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";
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
    // const aamotDeposited = await deployReamFactory.depositor(owner.address);
    expect(amount).to.equal(ethers.utils.parseEther("1.0"));
  });
  it("Should send funds from ream", async function () {
    const desc = "Test run"
    const to = addr1.address
    const deposit =  await (await deployReamFactory.sendFundsFromReam(0,to,desc)).wait();
    console.log(deposit.events);
  });
  it("Should check ream address", async function () {
    const addr =  await deployReamFactory.userToReamAddr(owner.address)
    console.log("addr",addr);
  });
  it("Should check for only admin upon sendFundsFromReam", async function () {
    const desc = "Test run"
    const to = addr1.address
    const sendFund =  deployReamFactory.connect(addr1).sendFundsFromReam(0,to,desc);
    expect(sendFund).to.be.revertedWith("Only admin can perform this action");
  });
  it("Should check for only admin upon deposit", async function () {
    const desc = "Test run"
    const to = addr1.address
    const sendFund =  deployReamFactory.connect(addr1).depositToReam();
    expect(sendFund).to.be.revertedWith("Only admin can perform this action");
  });
  
});
