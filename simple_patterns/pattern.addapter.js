class WDIOBrowser {
  goTo(url) {
    console.log('wdio go to ', url);
  }
}

class ProtractorBrowser {
  get(url) {
    console.log('Protractor navigate to ', url);
  }
}


const browser = ((browserInstance) => {
  class Addapted {
    constructor(br) {
      this.browser = br
    }

    get(url) {
      console.log('addapter call')
      this.browser.goTo(url)
    }
  }
  return new Addapted(browserInstance)
})(new WDIOBrowser())


browser.get('test url')
