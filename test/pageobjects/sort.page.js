import { $ } from '@wdio/globals'
import Page from './page.js';

class SortPage extends Page {
    sortOptions = [
        { text: 'Featured',           dataSort: 'default' },
        { text: 'Price: Low to High', dataSort: 'price-asc' },
        { text: 'Price: High to Low', dataSort: 'price-desc' },
        { text: 'Name: A → Z',        dataSort: 'name-asc' },
        { text: 'Name: Z → A',        dataSort: 'name-desc' },
        { text: 'On sale',            dataSort: 'on-sale' },
        { text: 'New arrivals',       dataSort: 'new' }
    ];

    get sortButton () {
        return $('.sort-btn');
    }

    optionByValue (dataSort) {
        return $(`[data-sort="${dataSort}"]`);
    }

    async sortBy (dataSort) {
        await this.sortButton.click();
        await this.optionByValue(dataSort).click();
    }

    open () {
        return super.open();
    }
}

export default new SortPage();
