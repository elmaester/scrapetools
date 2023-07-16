import puppeteer from "puppeteer";
import puppeteerExtra from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

async function getPuppeteerPageAndBrowser(
  headless = false,
  useStealth = false
) {
  const launchOptions = {
    headless,
  };

  if (useStealth) {
    puppeteerExtra.use(stealthPlugin());
    launchOptions.launcher = puppeteerExtra;
  }

  const browser = await puppeteer.launch(launchOptions);
  const [page] = await browser.pages();

  await page.setViewport({
    width: 1920,
    height: 900,
    deviceScaleFactor: 1,
  });

  return [page, browser];
}

export default getPuppeteerPageAndBrowser;
