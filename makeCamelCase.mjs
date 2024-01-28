const makeCamelCase = (key) => {
  const uppercaseSequences = key.match(/[A-Z]{2,}/g);

  if (uppercaseSequences) {
    key = uppercaseSequences.reduce(
      (acc, match) =>
        acc.replace(match, match[0] + match.slice(1).toLowerCase()),
      key
    );
  }

  if (key.includes(' ') || key.includes('-')) {
    key = key[0].toLowerCase() + key.slice(1).replace(/[^a-zA-Z0-9]/g, '');
  } else {
    key = key.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  }

  return key;
};

export default makeCamelCase;
