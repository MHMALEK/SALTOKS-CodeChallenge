const configSelector = (data) => {
  const config = {
    contactUs: data.contact_us,
    forms: data.forms
  }
  return config
}

const userLoginStatusSelector = (state) => {
  return state.AuthSSO.hasBeenSignedIn
}

export { configSelector, userLoginStatusSelector }
