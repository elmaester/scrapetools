import puppeteer from 'puppeteer';
import puppeteerExtra from 'puppeteer-extra';
import stealthPlugin from 'puppeteer-extra-plugin-stealth';

class PupMet {
  static extensionPaths = {
    apollo:
      '/home/morket/.config/chromium/Default/Extensions/alhgpfoeiimagjlnfekdhkjlkiomcapa/7.1.4_0/',
    ublock:
      '/home/morket/.config/chromium/Default/Extensions/cjpalhdlnbpafiamejdnhcphjbkeiagm/1.53.0_0/',
  };

  static async getPageAndBrowser(configArgument) {
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
        `--disable-extensions-except=${this.extensionPaths[config.extension]}`,
        `--load-extension=${this.extensionPaths[config.extension]}`
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

  static async parseResponse(response) {
    const request = response.request();

    if (
      // response.status === 200 &&
      ['xhr', 'fetch'].includes(request.resourceType())
    ) {
      console.log(request);
      const parseObj = {
        response: {
          url: response.url(),
          headers: response.headers(),
        },
        request: {
          url: request.url(),
          headers: request.headers(),
        },
      };

      try {
        parseObj.response.payload = await response.json();
      } catch {
        try {
          const responsePayload = await response.text()?.trim();
          if (responsePayload?.length) {
            parseObj.response.payload = responsePayload;
          }
        } catch {}
      }

      const requestPayload = request.postData()?.trim();
      if (requestPayload?.length) {
        try {
          parseObj.request.payload = JSON.parse(requestPayload);
        } catch {
          parseObj.request.payload = requestPayload;
        }
      }

      return parseObj;
    }
  }
}

export default PupMet;
