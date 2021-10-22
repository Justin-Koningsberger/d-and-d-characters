export const signedNumber = (maybeNumber) => {
  let displayValue
  if (isNaN(maybeNumber)) {
    displayValue = ''
  }
  else {
    displayValue = Math.sign(maybeNumber) < 0 ? maybeNumber : `+${maybeNumber}`
  }
  return displayValue
}
