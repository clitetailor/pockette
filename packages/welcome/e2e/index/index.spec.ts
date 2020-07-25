describe('HomePage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:5000/', {
      waitUntil: 'networkidle2',
    })
  })

  test('the title is "Pockette"', async () => {
    await expect(page.title()).resolves.toMatch('Pockette')
  })

  test('the heading is "Pockette"', async () => {
    const text = await page.evaluate(
      () => document.querySelector('h1')?.textContent
    )

    expect(text).toBe('Pockette')
  })
})
