require("@nomiclabs/hardhat-ethers")

//kovan addresses - change if using a different network
const host = "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9"
const fDAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00"

//your address here...
const owner = "0x718F390819f697075b7d538636148AA97b7bFB09"

//to deploy, run yarn hardhat deploy --network kovan

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    await deploy("TradeableCashflow", {
        from: deployer,
        args: [owner, "Tradeable Cashflow", "TCF", host, fDAIx],
        log: true
    })
}
module.exports.tags = ["TradeableCashflow"]
