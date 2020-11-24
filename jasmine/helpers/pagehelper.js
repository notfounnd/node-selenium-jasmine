import driverHelper from './driverhelper'
import { Key, until } from 'selenium-webdriver'

let driver

export async function startPageHelper () {
  driver = await driverHelper.getDriver()
}

export async function goToPage (url) {
  await driver.get(url)
}

export async function getElementBy (locator, timeout = Number(process.env.IMPLICT_TIMEOUT)) {
  await waitElement(locator, timeout)
  return await driver.findElement(locator)
}

export async function waitElement (locator, timeout = Number(process.env.IMPLICT_TIMEOUT)) {
  await driver.wait(until.elementLocated(locator, timeout))
}

export async function clickElement (locator) {
  const el = await getElementBy(locator)
  await el.click()
}

export async function elementIsVisible (locator) {
  const el = await getElementBy(locator)
  return await el.isDisplayed()
}

export async function waitForVisible (locator, timeout = Number(process.env.IMPLICT_TIMEOUT)) {
  const el = await getElementBy(locator, timeout)
  return await el.isDisplayed()
}

export async function elementIsEnable (locator) {
  const el = await getElementBy(locator)
  return await el.isEnabled()
}

export async function waitForEnable (locator, timeout = Number(process.env.IMPLICT_TIMEOUT)) {
  const el = await getElementBy(locator, timeout)
  return await el.isEnabled()
}

export async function elementIsSelected (locator) {
  const el = await getElementBy(locator)
  return await el.isSelected()
}

export async function waitForSelected (locator, timeout = Number(process.env.IMPLICT_TIMEOUT)) {
  const el = await getElementBy(locator, timeout)
  return await el.isSelected()
}

export async function typeInElement (locator, text) {
  const el = await getElementBy(locator)
  await el.sendKeys(text)
}

export async function clearElement (locator) {
  const el = await getElementBy(locator)
  await el.clear()
}

export async function clearElementSendKeys (locator) {
  const el = await getElementBy(locator)
  await el.click()
  await el.sendKeys(Key.chord(Key.CONTROL, 'a'))
  await el.sendKeys(Key.DELETE)
}

export async function getElementText (locator) {
  const el = await getElementBy(locator)
  return await el.getText()
}

export async function getElementAttribute (locator, attribute) {
  const el = await getElementBy(locator)
  return await el.getAttribute(attribute)
}

export async function takeScreenShot (name) {
  driver.takeScreenshot().then(
    function (image) {
      require('fs')
        .writeFile('./jasmine/report/' + name + '.png', image, 'base64', function (_err) { })
    }
  )
}
