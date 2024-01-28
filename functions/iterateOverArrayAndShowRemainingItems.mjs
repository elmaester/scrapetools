import insertDelay from './insertDelay.mjs';

async function iterateOverArrayAndShowRemainingItems(array, func, delay) {
  for (const [index, item] of Object.entries(array)) {
    const itemsLeft = array.length - index;
    console.log(
      `${itemsLeft} items left\ncurrent item: ${item}\ncurrent index: ${index}`
    );
    await func(item);
    if (delay && itemsLeft > 1) {
      await insertDelay(...delay);
    }
  }
}

export default iterateOverArrayAndShowRemainingItems;
