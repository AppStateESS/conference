const getPasswordMessage = (password, checkPassword) => {
  let passwordMessage = `Password should be 8 characters with a non-letter character (i.e. number, percent sign, etc.).`
  const passwordLength = password.length
  if (passwordLength >= 8) {
    if (password.search(/[^a-z]/) !== -1) {
      if (password !== checkPassword) {
        passwordMessage = 'Make sure your check password below matches.'
      } else {
        passwordMessage = 'This password will work.'
      }
    } else {
      passwordMessage = 'A non-letter character is needed.'
    }
  } else if (passwordLength !== 0) {
    const left = 8 - passwordLength
    passwordMessage = `Only ${left} ${
      left > 1 ? 'characters' : 'character'
    } left.`
  }
  return passwordMessage
}

export {getPasswordMessage}
