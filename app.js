import { PricePlanner } from "./main.js"
// Get input from DOM
const pricePlanner = PricePlanner()
const numOfApples = document.querySelector('.number-of-apples')
const boxCost = document.querySelector('.box-cost')
const packetSize = document.querySelector('.packet-size')
const calculateBtn = document.querySelector('.calculate-button')

// get elements from DOM
const appleCostElem = document.querySelector('.apple-cost')
const numPacketsElem = document.querySelector('.packets-number')
const packetCostElem = document.querySelector('.packets-cost')
const requiredProfitElem = document.querySelector('.required-profit')
const recommendedPriceElem = document.querySelector('.recommended-price')

const calculate = () => {
    // Get values
    const applesCount = numOfApples.value
    const packetsSize = packetSize.value
    const boxAppleCost = boxCost.value
    const requiredProfit = requiredProfitElem.value

    // Calll function
    pricePlanner.setBoxCost(boxAppleCost)
    pricePlanner.setNumOfApples(applesCount)
    pricePlanner.setNumApplesInPacket(packetsSize)
    pricePlanner.setProfit(requiredProfit)

    // dipslay to DOM
    numPacketsElem.innerHTML = Math.floor(pricePlanner.numOfPackets())
    appleCostElem.innerHTML = pricePlanner.costPrice().toFixed(2)
    packetCostElem.innerHTML = pricePlanner.packetCost().toFixed(2)
    recommendedPriceElem.innerHTML = pricePlanner.makeProfit().toFixed(2)
}



calculateBtn.addEventListener('click', calculate)