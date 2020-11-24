import { goToPage, elementIsVisible, getElementText, typeInElement, clearElement, getElementAttribute, clearElementSendKeys, waitForEnable, waitForVisible } from '../../helpers/pagehelper'
import { testPage } from '../../pages/examplepage'
require('../../helpers/hooks')

describe('Describe Test', function () {
  it('It Test 1', async () => {
    await goToPage('http://test.juniorsbrissa.com/pagina-de-exemplo/')

    await typeInElement(testPage.inputName, 'Teste do Campo')
    expect(await getElementAttribute(testPage.inputName, 'value')).toEqual('Teste do Campo')

    await clearElement(testPage.inputName)
    expect(await getElementAttribute(testPage.inputName, 'value')).toEqual('')

    await typeInElement(testPage.inputName, 'Teste do Campo')
    expect(await getElementAttribute(testPage.inputName, 'value')).toEqual('Teste do Campo')

    await clearElementSendKeys(testPage.inputName)
    expect(await getElementAttribute(testPage.inputName, 'value')).toEqual('')

    expect(await waitForVisible(testPage.inputName, 10000)).toBe(true)
    expect(await waitForEnable(testPage.inputName, 25000)).toBe(true)
  })

  it('It Test 2', async () => {
    await goToPage('http://test.juniorsbrissa.com/')

    expect(await elementIsVisible(testPage.title)).toEqual(true)
    expect(await getElementText(testPage.title)).toEqual('HOME de EXEMPLO')
  })
})
