const { ExpectedConditions: EC } = require('protractor')
const { expect } = require('chai')

describe('Github automation testing', function () {

  before(function () {
    browser.ignoreSynchronization = true
  })

  it.skip('Nav bar navigation test', async function () {
    await browser.get('https://github.com/potapovDim/')

    const reposRoot = $('#user-repositories-list')

    const overview = $('[aria-label="User profile"] a:nth-child(1)')
    const repos = $('[aria-label="User profile"] a:nth-child(2)')

    // const projects = $('[aria-label="User profile"] a:nth-child(3)')
    // const stars = $('[aria-label="User profile"] a:nth-child(4)')
    // const followers = $('[aria-label="User profile"] a:nth-child(5)')
    // const following = $('[aria-label="User profile"] a:nth-child(6)')

    await overview.click()
    expect(await overview.getText()).to.eql('Overview')

    await repos.click()
    expect(await repos.getText()).to.includes('Repositories')
    await browser.wait(EC.visibilityOf(reposRoot), 5 * 1000, 'Repos should be visible')

  });

  it('Search repos by word', async function () {
    await browser.get('https://github.com/potapovDim?tab=repositories')
    const rootElement = $('#user-repositories-list')
    const searchInput = $('input#your-repos-filter')
    const repos = rootElement.$$('[itemprop="owns"]')

    await browser.wait(EC.visibilityOf(rootElement), 5 * 1000, 'Repos root should be visible')
    await searchInput.sendKeys('protractor')
    await browser.wait(async () => { return (await repos.count()) === 2 }, 5 * 1000, 'Repos should be visible')

    const reposCount = await repos.count()
    for (let i = 0; i < reposCount; i++) {
      expect(await repos.get(i).getText()).to.include('Nightwatch')
    }
  })
});