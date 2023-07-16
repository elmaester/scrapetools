import axios from "axios";
import chunkArray from "./functions/chunkArray.mjs";
import filterExistingMongoDocs from "./functions/filterExistingMongoDocs.mjs";
import getLocalMongoCollectionReference from "./functions/getLocalMongoCollectionReference.mjs";
import getPuppeteerPageAndBrowser from "./functions/getPuppeteerPageAndBrowser.mjs";
import getRandomInteger from "./functions/getRandomInteger.mjs";
import handleAxiosError from "./functions/handleAxiosError.mjs";
import insertDelay from "./functions/insertDelay.mjs";
import iterateOverArrayAndShowRemainingItems from "./functions/iterateOverArrayAndShowRemainingItems.mjs";
import parseResponseInPuppeteer from "./functions/parseResponseInPuppeteer.mjs";
import scrapeIt from "scrape-it";
import soundWarning from "./functions/soundWarning.mjs";

export {
  axios,
  chunkArray,
  filterExistingMongoDocs,
  getLocalMongoCollectionReference,
  getPuppeteerPageAndBrowser,
  getRandomInteger,
  handleAxiosError,
  insertDelay,
  iterateOverArrayAndShowRemainingItems,
  parseResponseInPuppeteer,
  scrapeIt,
  soundWarning,
};
