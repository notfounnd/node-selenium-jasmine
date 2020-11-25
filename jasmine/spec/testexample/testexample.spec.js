import { goToPage, elementIsVisible, getElementText } from '../../helpers/pagehelper'
import { testPage } from '../../pages/examplepage'
require('../../helpers/hooks')

describe('Describe Test #tag0', function () {
  it('It Test 1 #tag1', async () => {
    await goToPage('http://test.juniorsbrissa.com/')

    expect(await elementIsVisible(testPage.title)).toEqual(true)
  })

  it('It Test 2 #tag2', async () => {
    await goToPage('http://test.juniorsbrissa.com/')

    expect(await elementIsVisible(testPage.title)).toEqual(true)
    expect(await getElementText(testPage.title)).toEqual('HOME DE EXEMPLO')
  })
})
