function chunkArray(sourceArray, chunkSize) {
  const outputArray = [];
  for (let i = 0; i < sourceArray.length; i += chunkSize) {
    const chunk = sourceArray.slice(i, i + chunkSize);
    outputArray.push(chunk);
  }
  return outputArray;
}

export default chunkArray;
