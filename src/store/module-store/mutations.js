export function updateCurrency (state, value) {
  state.savedCurrency = value
  localStorage.setItem('currencyStore', JSON.stringify(state.savedCurrency))
}
export function updateCurrencyCountry (state, value) {
  state.savedCurrencyCountry = value
  localStorage.setItem('currencyStoreCurrency', JSON.stringify(state.savedCurrencyCountry))
}
