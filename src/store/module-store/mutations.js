export function updateCurrency (state, value) {
  state.savedCurrency = value
  localStorage.setItem('currencyStore', JSON.stringify(state.savedCurrency))
}
