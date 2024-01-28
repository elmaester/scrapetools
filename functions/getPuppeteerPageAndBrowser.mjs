import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

const extensionPaths = {
  apollo:
    '/home/morket/.config/chromium/Default/Extensions/alhgpfoeiimagjlnfekdhkjlkiomcapa/7.1.4_0/',
  ublock:
    '/home/morket/.config/chromium/Default/Extensions/cjpalhdlnbpafiamejdnhcphjbkeiagm/1.53.0_0/',
};

async function getPuppeteerPageAndBrowser(configArgument) {
  const defaultConfig = {
    headless: false,
    useStealth: false,
    useRealBrower: false,
  };
  const config = Object.assign(defaultConfig, configArgument);
  const { headless, useStealth, useRealBrower, proxyString } = config;
  const launchOptions = {
    headless,
    args: [],
  };

  if (useRealBrower) {
    launchOptions.executablePath = '/usr/bin/chromium';
  }

  if (useStealth) {
    puppeteerExtra.use(stealthPlugin());
    launchOptions.launcher = puppeteerExtra;
  }

  if (config.extension) {
    launchOptions.args.push(
      `--disable-extensions-except=${extensionPaths[config.extension]}`,
      `--load-extension=${extensionPaths[config.extension]}`
    );
  }

  if (config.proxyString) {
    launchOptions.args.push(`--proxy-server=${proxyString}`);
  }

  const browser = await puppeteer.launch(launchOptions);
  const pages = await browser.pages();
  const page = pages[0];

  await page.setViewport({
    width: 1920,
    height: 900,
    deviceScaleFactor: 1,
  });

  return { page, pages, browser };
}

export default getPuppeteerPageAndBrowser;
