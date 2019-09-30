const {
  both,
  either,
  neither,
  itsComplicated
} = require('./main')

describe('both', () => {
  it('is a function', () => {
    expect(typeof both).toEqual('function')
  })

  it('returns `true` if both parameters are `true`', () => {
    expect(both(true, true)).toBe(true)
  })

  it('returns `false` if either parameter is `false`', () => {
    expect(both(true, false)).toBe(false)
    expect(both(false, true)).toBe(false)
  })

  it('returns `false` if both parameters are `false`', () => {
    expect(both(false, false)).toBe(false)
  })
})

describe('either', () => {
  it('is a function', () => {
    expect(typeof either).toBe('function')
  })
  
  it('returns `true` if both parameters are `true`', () => {
    expect(either(true, true)).toBe(true)
  })
  
  it('returns `true` if either parameter is `true`', () => {
    expect(either(true, false)).toBe(true)
    expect(either(false, true)).toBe(true)
  })

  it('returns `false` if both parameters are `false`', () => {
    expect(either(false, false)).toBe(false)
  })
})

describe('neither', () => {
  it('is a function', () => {
    expect(typeof neither).toBe('function')
  })

  it('returns `true` if both parameters are `false`', () => {
    expect(neither(false, false)).toBe(true)
  })

  it('returns `false` if either parameter is `true`', () => {
    expect(neither(false, true)).toBe(false)
    expect(neither(true, false)).toBe(false)
    expect(neither(true, true)).toBe(false)
  })
})

describe('itsComplicated', () => {
  it('is a function', () => {
    expect(typeof itsComplicated).toBe('function')
  })

  it('returns `true` if the first parameter is `false`', () => {
    expect(itsComplicated(false, true, false)).toBe(true)
    expect(itsComplicated(false, false, false)).toBe(true)
    expect(itsComplicated(false, false, true)).toBe(true)
    expect(itsComplicated(false, true, true)).toBe(true)
  })

  it('returns `true` if both the second and third parameter are `true`', () => {
    expect(itsComplicated(false, true, true)).toBe(true)
    expect(itsComplicated(true, true, true)).toBe(true)
  })

  it('returns `false` if the first parameter is `true` and either the second or third parameter are `false`', () => {
    expect(itsComplicated(true, false, true)).toBe(false)
    expect(itsComplicated(true, true, false)).toBe(false)
  })

  it('returns `true` if the first parameter is `false` and both the second and third parameter are `true`', () => {
    expect(itsComplicated(false, true, true)).toBe(true)
  })
})