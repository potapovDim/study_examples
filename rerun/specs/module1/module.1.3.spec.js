const { expect } = require('chai')
const { it } = require('../mocha.it.wrapper')

describe('module 1 3', function () {
  it('C13', () => {
    expect(2).to.eq(4)
  })

  it('C14', () => {
    throw Error('This is an error')
  })

  it('C15', () => {
    expect(2).to.eq(4)
  })

  it('C16', () => {
    expect(2).to.eq(2)
  })
})