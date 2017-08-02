import lazy from './index'

it('this is a test', async () => {
  expect(await lazy()).toBe(1)
})
