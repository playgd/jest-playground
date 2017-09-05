'use strict'

it('snapshot', () => {
  expect({
    test: 1
  }).toMatchSnapshot()
})
