'use strict'

import React from 'react'
import Comp from './react-component'

it('Test', () => {
  const { children } = Comp().props
  expect(children).toBe('Function Component')
})
