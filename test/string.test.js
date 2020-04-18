require('../src/string')

test('测试 String.replaceAll', () => {
    //参数错误
    try {
        ''.replaceAll()
    }
    catch (err) {
        expect(err.toString().indexOf('as the first param') > 0).toEqual(true)
    }
    try {
        ''.replaceAll(123)
    }
    catch (err) {
        expect(err.toString().indexOf('must be a non-empty string') > 0).toEqual(true)
    }
    try {
        ''.replaceAll('')
    }
    catch (err) {
        expect(err.toString().indexOf('must be a non-empty string') > 0).toEqual(true)
    }
    try {
        ''.replaceAll('123')
    }
    catch (err) {
        expect(err.toString().indexOf('as the second param') > 0).toEqual(true)
    }
    try {
        ''.replaceAll('123',1)
    }
    catch (err) {
        expect(err.toString().indexOf('must be a string') > 0).toEqual(true)
    }
    // 简单字符
    let str = '122333444455555'
    expect(str.replaceAll('3','')).toEqual('122444455555')
    // 带有特殊字符
    str = '()[]{}'
    expect(str.replaceAll('(','').replaceAll('[','').replaceAll('{','')).toEqual(')]}')
    // 更特殊的 '\' 的处理
    str = '\\\\\\'
    expect(str.replaceAll('\\','')).toEqual('')    
})

test('测试 String.removeBlank', () => {
    // 简单字符
    let str = ` 1    2  a
    b !`
    expect(str.removeBlank()).toEqual(`12a
b!`)
})

test('测试 String.removeEOL', () => {
    // 简单字符
    let str = ` 1    2  a
    b !
    `
    expect(str.removeBlank().removeEOL()).toEqual(`12ab!`)
})

test('测试 String.padLeft/padRight', () => {
    //参数错误
    try {
        ''.padLeft()
    }
    catch (err) {
        expect(err.toString().indexOf('as the first param') > 0).toEqual(true)
    }
    try {
        ''.padLeft('')
    }
    catch (err) {
        expect(err.toString().indexOf('must be a non-zero integer') > 0).toEqual(true)
    }
    try {
        ''.padLeft(0)
    }
    catch (err) {
        expect(err.toString().indexOf('must be a non-zero integer') > 0).toEqual(true)
    }
    try {
        ''.padLeft(4)
    }
    catch (err) {
        expect(err.toString().indexOf('as the second param') > 0).toEqual(true)
    }
    try {
        ''.padLeft(4,1)
    }
    catch (err) {
        expect(err.toString().indexOf('contains only 1 character') > 0).toEqual(true)
    }
    try {
        ''.padLeft(4,'')
    }
    catch (err) {
        expect(err.toString().indexOf('contains only 1 character') > 0).toEqual(true)
    }
    // 简单字符
    expect(''.padLeft(4,'0')).toEqual('0000')
    expect('1'.padLeft(4,'0')).toEqual('0001')
    expect('1234'.padLeft(4,'0')).toEqual('1234')
    expect('1234'.padLeft(3,'0')).toEqual('1234')
})

test('测试 String.toHash/md5/sh256/sh512', () => {
    // 简单字符
    let str = '123456'
    expect(str.toHash('md5')).toEqual(`e10adc3949ba59abbe56e057f20f883e`)
    expect(str.md5()).toEqual(`e10adc3949ba59abbe56e057f20f883e`)
})
