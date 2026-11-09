import { expect } from '@wdio/globals'
import SortPage from '../pageobjects/sort.page.js'

describe('Sort dropdown', () => {
    for (let i = 0; i < SortPage.sortOptions.length; i++) {
        it(`should sort by ${SortPage.sortOptions[i].text}`, async () => {
            await SortPage.open()
            await SortPage.sortBy(SortPage.sortOptions[i].dataSort)
            await expect(SortPage.sortButton).toHaveText(
                expect.stringContaining(SortPage.sortOptions[i].text))
        })
    }
})
