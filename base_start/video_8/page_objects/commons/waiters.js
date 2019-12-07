const EC = protractor.ExpectedConditions

async function waitForElementVisible(el, timeout = 5000, message) {
  await browser.wait(EC.visibilityOf(el), timeout, message)
}

module.exports = {
  waitForElementVisible
}