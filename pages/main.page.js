import {test, page} from '@playwright/test'

export class MainPage {

    constructor(page) {
        this.page = page;
    } 

    async open() {
        await this.page.goto('https://burgershop-stage.qa-academy.eu/index.php?');
    }
}