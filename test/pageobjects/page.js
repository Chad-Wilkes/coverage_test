import { browser } from '@wdio/globals'

export default class Page {
    open () {
        return browser.url(`https://rippsam.github.io/sportsEquip/index.html?dept=5`)
    }
}
