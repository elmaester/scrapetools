import axios from 'axios';
import backUpAsJson from './functions/backUpAsJson.mjs';
import catchAxiosError from './functions/catchAxiosError.mjs';
import chunkArray from './functions/chunkArray.mjs';
import dayjs from 'dayjs';
import dedupeArray from './functions/dedupeArray.mjs';
import { EventEmitter } from 'events';
import getAxiosWithJar from './functions/getAxiosWithJar.mjs';
import getMongoRefs from './functions/getMongoRefs.mjs';
import getNumberSequence from './functions/getNumberSequence.mjs';
import getPuppeteerPageAndBrowser from './functions/getPuppeteerPageAndBrowser.mjs';
import getRandomInteger from './functions/getRandomInteger.mjs';
import handleAxiosError from './functions/handleAxiosError.mjs';
import scrapeIt from 'scrape-it';
import insertDelay from './functions/insertDelay.mjs';
import insertUniqueDocsIntoMongo from './functions/insertUniqueDocsIntoMongo.mjs';
import iterateOverArrayAndShowRemainingItems from './functions/iterateOverArrayAndShowRemainingItems.mjs';
import { JSDOM } from 'jsdom';
import makeCamelCase from './makeCamelCase.mjs';
import parseResponseInPuppeteer from './functions/parseResponseInPuppeteer.mjs';
import prependWithZeros from './functions/prependWithZeros.mjs';
import soundWarning from './functions/soundWarning.mjs';
import {
  between,
  clean,
  convertToCamelCase,
  parseNumber,
} from './functions/stringManipulation.mjs';

const userAgent = {
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
};

export {
  axios,
  backUpAsJson,
  between,
  catchAxiosError,
  chunkArray,
  clean,
  convertToCamelCase,
  dayjs,
  dedupeArray,
  EventEmitter,
  getAxiosWithJar,
  getMongoRefs,
  getNumberSequence,
  getPuppeteerPageAndBrowser,
  getRandomInteger,
  handleAxiosError,
  insertDelay,
  insertUniqueDocsIntoMongo,
  iterateOverArrayAndShowRemainingItems,
  JSDOM,
  makeCamelCase,
  parseNumber,
  parseResponseInPuppeteer,
  prependWithZeros,
  scrapeIt,
  soundWarning,
  userAgent,
};
