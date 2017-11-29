const puppeteer = require('puppeteer');
const path = require('path');

let browser;

module.exports = async () => {
  if(!browser) {
    browser = await puppeteer.launch();
  }
  let page = await browser.newPage();
  await page.goto(`file://${path.resolve(__dirname, '../example/index.html')}`);
  return page;
}
