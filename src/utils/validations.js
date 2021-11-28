//Validate whether or not is a number
const isNumber = (value) => {
  let character = String(value.charAt(value.length - 1))
  return /^[0-9]$/.test(character)
}

export const checkCreditCard = (value) => {
  let isValid = true

  if (value.length > 0) {
    isValid = isNumber(value)
  }

  if (value.length > 16) isValid = false

  return isValid
}

export const checkCardHolder = (value) => {
  return value.length >= 0 && value.length <= 30
}

export const checkCvv = (value) => {
  let isValid = true

  if (value.length > 0) {
    isValid = isNumber(value)
  }

  if (value.length > 3) isValid = false

  return isValid
}
