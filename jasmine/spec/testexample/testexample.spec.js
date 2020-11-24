import { goToPage, elementIsVisible, getElementText } from '../../helpers/pagehelper'
import { testPage } from '../../pages/examplepage'
require('../../helpers/hooks')

describe('Describe Test', function () {
  it('It Test 1', async () => {
    await goToPage('http://test.juniorsbrissa.com/')

    expect(await elementIsVisible(testPage.title)).toEqual(true)
  })

  it('It Test 2', async () => {
    await goToPage('http://test.juniorsbrissa.com/')

    expect(await elementIsVisible(testPage.title)).toEqual(true)
    expect(await getElementText(testPage.title)).toEqual('HOME DE EXEMPLO')
  })
})
