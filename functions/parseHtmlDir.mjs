import { readdirSync, readFileSync } from 'fs';

const parseHtmlDir = async (dirPath, parseFunc, collection) => {
  const filenames = readdirSync(dirPath);

  for (const filename of filenames) {
    const html = readFileSync(`${dirPath}/${filename}`, { encoding: 'utf-8' });
    const data = parseFunc(html);
    await collection.insertOne(data);
  }
};

export default parseHtmlDir;
