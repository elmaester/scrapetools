const catchAxiosError = async (error, errorsCollection) => {
  if (error.response) {
    const { headers, data, status } = error.response
    if (errorsCollection) {
      await errorsCollection.insertOne({ headers, data, status })
      console.log('error saved in mongo')
    } else {
      console.log(headers, data, status)
    }
  }
}

export default catchAxiosError
