import insertDelay from "./insertDelay.mjs";

async function iterateOverArrayAndShowRemainingItems(array, func, delay) {
  for (const [index, item] of Object.entries(array)) {
    console.log(`${array.length - index} items left`);
    await func(item);
    if (delay) {
      await insertDelay(...delay);
    }
  }
}

export default iterateOverArrayAndShowRemainingItems;
