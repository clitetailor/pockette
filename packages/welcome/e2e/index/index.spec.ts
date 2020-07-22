describe('HomePage', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/', {
      waitUntil: 'networkidle2',
    })
  })

  test('the title is "Svelte app"', async () => {
    await expect(page.title()).resolves.toMatch('Svelte app')
  })

  test('the heading is "Hello, World!"', async () => {
    const text = await page.evaluate(
      () => document.querySelector('h1')?.textContent
    )

    expect(text).toBe('Hello, World!')
  })
})
