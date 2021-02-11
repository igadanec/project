import axios from 'axios'
export function getCurrency ({ commit }, payload) {
  console.log(payload)
  return new Promise((resolve, reject) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.hnb.hr/tecajn/v1?valuta=${payload.valuta}`).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
