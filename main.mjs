import axios from 'axios'
import backUpAsJson from './functions/backUpAsJson.mjs'
import catchAxiosError from './functions/catchAxiosError.mjs'
import chunkArray from './functions/chunkArray.mjs'
import filterExistingMongoDocs from './functions/filterExistingMongoDocs.mjs'
import getAxiosWithJar from './functions/getAxiosWithJar.mjs'
import getLocalMongoRefs from './functions/getLocalMongoRefs.mjs'
import getNumberSequence from './functions/getNumberSequence.mjs'
import getPuppeteerPageAndBrowser from './functions/getPuppeteerPageAndBrowser.mjs'
import getRandomInteger from './functions/getRandomInteger.mjs'
import handleAxiosError from './functions/handleAxiosError.mjs'
import insertDelay from './functions/insertDelay.mjs'
import iterateOverArrayAndShowRemainingItems from './functions/iterateOverArrayAndShowRemainingItems.mjs'
import makeCamelCase from './makeCamelCase.mjs'
import parseResponseInPuppeteer from './functions/parseResponseInPuppeteer.mjs'
import scrapeIt from 'scrape-it'
import soundWarning from './functions/soundWarning.mjs'
import { between, clean, parseNumber } from './functions/stringManipulation.mjs'

const userAgent = {
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
}

export {
  axios,
  backUpAsJson,
  between,
  catchAxiosError,
  chunkArray,
  clean,
  filterExistingMongoDocs,
  getAxiosWithJar,
  getLocalMongoRefs,
  getNumberSequence,
  getPuppeteerPageAndBrowser,
  getRandomInteger,
  handleAxiosError,
  insertDelay,
  iterateOverArrayAndShowRemainingItems,
  makeCamelCase,
  parseNumber,
  parseResponseInPuppeteer,
  scrapeIt,
  soundWarning,
  userAgent,
}
