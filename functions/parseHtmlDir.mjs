import { readdirSync, readFileSync } from 'fs';
import insertUniqueDocsIntoMongo from './insertUniqueDocsIntoMongo.mjs';
import iterateOverArrayAndShowRemainingItems from './iterateOverArrayAndShowRemainingItems.mjs';

const parseHtmlListDir = async (
  dirPath,
  parseFunc,
  collection,
  uniqueField
) => {
  const filenames = readdirSync(dirPath);

  await iterateOverArrayAndShowRemainingItems(filenames, async (filename) => {
    const html = readFileSync(`${dirPath}/${filename}`, { encoding: 'utf-8' });
    const data = parseFunc(html);
    await insertUniqueDocsIntoMongo(data, collection, uniqueField);
  });
};

export default parseHtmlListDir;
