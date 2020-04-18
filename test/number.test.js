require('../src/number')

test('测试 Number.randomBetween', () => {
    //参数错误
    try {
        Number.randomBetween()
    }
    catch (err) {
        expect(err.toString().indexOf('both min and max number of your random range') > 0).toEqual(true)
    }
    try {
        Number.randomBetween(1)
    }
    catch (err) {
        expect(err.toString().indexOf('both min and max number of your random range') > 0).toEqual(true)
    }
    try {
        Number.randomBetween('')
    }
    catch (err) {
        expect(err.toString().indexOf('both min and max number of your random range') > 0).toEqual(true)
    }
    try {
        Number.randomBetween(1,[])
    }
    catch (err) {
        expect(err.toString().indexOf('must be a number') > 0).toEqual(true)
    }
    // 检查范围
    let rdm = Number.randomBetween(0,100)
    expect(rdm >= 0 && rdm <= 100).toEqual(true)
})
