import { By } from 'selenium-webdriver'

export const googleObjects = {
  inputSearch: By.name('q'),
  btnSearch: By.name('btnK'),
  resultsStats: By.id('result-stats')
}

export const testPage = {
  title: By.xpath("//div[@class='post-wrap']/h1"),
  inputName: By.xpath("//input[@name='inputName']")
}
