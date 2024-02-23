import ArMet from "./functions/ArMet.mjs";
import axios from "axios";
import backUpAsJson from "./functions/backUpAsJson.mjs";
import catchAxiosError from "./functions/catchAxiosError.mjs";
import dayjs from "dayjs";
import { EventEmitter } from "events";
import getAxiosWithJar from "./functions/getAxiosWithJar.mjs";
import getMongoRefs from "./functions/getMongoRefs.mjs";
import getRandomInteger from "./functions/getRandomInteger.mjs";
import handleAxiosError from "./functions/handleAxiosError.mjs";
import insertDelay from "./functions/insertDelay.mjs";
import insertUniqueDocsIntoMongo from "./functions/insertUniqueDocsIntoMongo.mjs";
import iterateOverArrayAndShowRemainingItems from "./functions/iterateOverArrayAndShowRemainingItems.mjs";
import { JSDOM } from "jsdom";
import parseHtmlListDir from "./functions/parseHtmlDir.mjs";
import PupMet from "./functions/PupMet.mjs";
import soundWarning from "./functions/soundWarning.mjs";
import StriMan from "./functions/StriMan.mjs";

const userAgent = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
};

export {
  ArMet,
  axios,
  backUpAsJson,
  catchAxiosError,
  dayjs,
  EventEmitter,
  getAxiosWithJar,
  getMongoRefs,
  getRandomInteger,
  handleAxiosError,
  insertDelay,
  insertUniqueDocsIntoMongo,
  iterateOverArrayAndShowRemainingItems,
  JSDOM,
  parseHtmlListDir,
  PupMet,
  soundWarning,
  StriMan,
  userAgent,
};
