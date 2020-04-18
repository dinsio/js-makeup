require('../src/date')

test('测试 Date.dateString/timeString/dtString', () => {
    let dt = new Date(2018,0,1,12,0,0)
    expect(dt.dateString()).toEqual('2018-01-01')
    expect(dt.timeString()).toEqual('12:00:00')
    expect(dt.dtString()).toEqual('2018-01-01 12:00:00')
})

test('测试 Date.makeOne', () => {
    let dt = new Date(2018,0,1,12,0,0)
    expect(Date.makeOne(2018,1,1,12,0,0)).toEqual(dt)
})
