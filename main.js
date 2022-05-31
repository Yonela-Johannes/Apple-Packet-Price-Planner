const PricePlanner = () => {
    let boxCost = 0
    let numOfApples = 0
    let numOfApplesInPacket = 0
    let profit = 0

    // setting and getting box cost
    const setBoxCost = cost => boxCost = cost
    const getBoxCost = () => boxCost
    // setting and getting number of apples in a box
    const setNumOfApples = num => numOfApples = num
    const getNumOfApples = () => numOfApples
    // setting and getting number of apples in packet
    const setNumApplesInPacket = num => numOfApplesInPacket = num
    const getNumOfApplesInPacket = () => numOfApplesInPacket
    // getting and setting profit
    const setProfit = prof => profit = prof
    const getProfit = () => profit

    // output calculations
    const numOfPackets = () => numOfApples / numOfApplesInPacket
    const costPrice = () => boxCost / numOfApples
    const packetCost = () => costPrice() * parseFloat(numOfApplesInPacket)
    const makeProfit = () => packetCost() + parseFloat(profit)
    return {
        setBoxCost,
        getBoxCost,
        setNumOfApples,
        getNumOfApples,
        setNumApplesInPacket,
        getNumOfApplesInPacket,
        setProfit,
        getProfit,
        numOfPackets,
        costPrice,
        packetCost,
        makeProfit
    }

}

export { PricePlanner }