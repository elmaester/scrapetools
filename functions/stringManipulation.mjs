export const clean = (str) => str.replace(/\s\s+/g, ' ').trim()

export const between = (left, right, str) => {
  const startPos = str.indexOf(left)
  const endPos = str.indexOf(right, startPos + left.length)
  if (endPos === -1 && right != null) return ''
  else if (endPos === -1 && right == null)
    return str.substring(startPos + left.length)
  else return str.slice(startPos + left.length, endPos).trim()
}

export const parseNumber = (value) => parseInt(value.replace(/\D/g, ''))
