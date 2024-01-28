import getRandomInteger from './getRandomInteger.mjs'

async function insertDelay(minSeconds = 15, maxSeconds = 30, quiet = false) {
  const delay = getRandomInteger(minSeconds * 1000, maxSeconds * 1000)
  if (!quiet) {
    console.log(`waiting for ${delay} ms`)
  }
  await new Promise((resolve) => setTimeout(resolve, delay))
}

export default insertDelay
