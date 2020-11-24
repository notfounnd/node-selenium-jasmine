import { Builder } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
require('chromedriver')

class DriverHelper {
  constructor (driver) {
    this.driver = driver
  }

  async tearUp () {
    await this.setDriver()
  }

  async tearDown () {
    await this.driver.quit()
  }

  getDriver () {
    return this.driver
  }

  async setDriver () {
    switch (true) {
      case process.argv.includes('--firefox'):
        console.log('\x1b[35m%s\x1b[0m', 'TODO: Implement firefox option!')
        process.exit()
      default:
        this.driver = await new Builder()
          .setChromeOptions(this.getBrowserOptions())
          .forBrowser('chrome')
          .build()
        await this.driver.manage().setTimeouts({ implicit: parseInt(process.env.IMPLICT_TIMEOUT) })
        await this.driver.manage().window().setRect({ width: 1920, height: 1080 })
    }
  }

  getBrowserOptions () {
    const browserOptions = new chrome.Options()
    if (!process.argv.includes('--headed')) {
      browserOptions.addArguments('headless')
    }
    browserOptions.addArguments('disable-infobars')
    browserOptions.addArguments('no-sandbox')
    browserOptions.addArguments('disable-gpu')
    browserOptions.addArguments('disable-dev-shm-usage')
    browserOptions.addArguments('log-level=3')
    browserOptions.setUserPreferences({ credential_enable_service: false })
    return browserOptions
  }
}

module.exports = new DriverHelper()
