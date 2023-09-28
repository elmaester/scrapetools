import insertDelay from './insertDelay.mjs'
import soundWarning from './soundWarning.mjs'

async function iterateOverArrayAndShowRemainingItems(array, func, delay) {
  try {
    for (const [index, item] of Object.entries(array)) {
      const itemsLeft = array.length - index
      console.log(`${itemsLeft} items left`)
      await func(item)
      if (delay && itemsLeft > 1) {
        await insertDelay(...delay)
      }
    }
  } finally {
    soundWarning()
  }
}

export default iterateOverArrayAndShowRemainingItems
