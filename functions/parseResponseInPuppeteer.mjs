async function parseResponseInPuppeteer(response) {
  const request = response.request()

  if (
    // response.status === 200 &&
    ['xhr', 'fetch'].includes(request.resourceType())
  ) {
    console.log(request)
    const parseObj = {
      response: {
        url: response.url(),
        headers: response.headers(),
      },
      request: {
        url: request.url(),
        headers: request.headers(),
      },
    }

    try {
      parseObj.response.payload = await response.json()
    } catch {
      try {
        const responsePayload = await response.text()?.trim()
        if (responsePayload?.length) {
          parseObj.response.payload = responsePayload
        }
      } catch {}
    }

    const requestPayload = request.postData()?.trim()
    if (requestPayload?.length) {
      try {
        parseObj.request.payload = JSON.parse(requestPayload)
      } catch {
        parseObj.request.payload = requestPayload
      }
    }

    return parseObj
  }
}

export default parseResponseInPuppeteer
