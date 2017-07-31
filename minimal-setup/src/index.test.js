it('this is a test', async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      expect(1).toBe(1)
      resolve()
    }, 2000)
  })
})
