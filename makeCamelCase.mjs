const makeCamelCase = (key) =>
  key.includes(" ") || key.includes("-")
    ? key[0].toLowerCase() + key.slice(1).replace(/[^a-zA-Z0-9]/g, "")
    : key.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

export default makeCamelCase;
