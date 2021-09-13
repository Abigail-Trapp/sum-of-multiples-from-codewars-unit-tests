function sumMul(n, m) {
    sum = 0
    let x = []
    for (let i = n; i < m; i++) {
        if (i % n === 0 && i < m) {
            x.push(i)
            sum += i
        }
    }
    if (m <= 0) {
        return ("INVALID")
    } else {
        return (sum)
    }
   
}

console.assert(sumMul(2,9) === 20, "false",{
    "test": '2 + 4 + 6 + 8 = 20',
    "expected": 20,
    "result": sum
})
console.assert(sumMul(3,22) === 84, "false",{
    "test": '3 + 6 + 9 + 12 + 15 + 18 + 21 = 84',
    "expected": 84,
    "result": sum
})
console.assert(sumMul(4,0) === "INVALID", "false",{
    "test": 'Cannot multiply by 0!',
    "expected": "INVALID",
    "result": sum
})
console.assert(sumMul(5,-16) === "INVALID", "false",{
    "test": 'Cannot multiplybnegative numbers!',
    "expected": "INVALID",
    "result": sum
})