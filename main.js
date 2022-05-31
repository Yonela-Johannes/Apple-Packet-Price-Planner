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
    const getNUmOfApples = () => numOfApples
    // setting and getting number of apples in packet
    const setNumApplesInPacket = num => numOfApplesInPacket = num
    const getNumOfApplesInPacket = () => numOfApplesInPacket
    // getting and setting profit
    const setProfit = prof => profit = prof
    const getProfit = () => profit
    return {
        setBoxCost,
        getBoxCost,
        setNumOfApples,
        getNUmOfApples,
        setNumApplesInPacket,
        getNumOfApplesInPacket,
        setProfit,
        getProfit
    }

}

export { PricePlanner }