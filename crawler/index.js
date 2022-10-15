const puppeteer = require('puppeteer');
const url = 'https://lostmerchants.com';

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

const crawler = async() => {
    try {
        const browser = await puppeteer.launch({ headless: true });    // Launch browser automation
        const page = await browser.newPage();
        await page.goto(url);

        await delay(3000);                                              // Add delay

        await page.select('select#severRegion', 'NAE');                 // Select Region
        await page.select('select#server', 'Azena');                    // Select Server

        await delay(500);

        const result = await page.evaluate(() => {                      // Retrieve region, area, and item into the result list
            const list = [];
            const legCards = document.querySelectorAll('div.card-frame.rarity--Legendary.merchant__card');

            if (legCards.length) {
                legCards.forEach((card) => {
                    let r = card.querySelector('div.card-frame__inner > div.card-frame__title').innerHTML;
                    let a = card.querySelector('div.card-frame__inner > div.card-frame__title.title__clickable').innerHTML.replace(/[^a-zA-Z0-9 ]/g, '');
                    let i = card.querySelector('div.card-frame__inner > div.stock > div.stock__item > span').innerHTML;

                    list.push({ region: r, area: a, item: i});
                });
            }
            return list;
        });
        // console.log(result);
        browser.close();
    } catch (e) {
        console.error(e);
    }
};

crawler();