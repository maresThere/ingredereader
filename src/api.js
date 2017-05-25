const API_BASE = 'https://api.nutritionix.com/v1_1/item'
const appKey = '1ed97d8b84e2fc216cfe4311607deea9'
const appId = 'fa7feea6'

const get = (upc) => {
  const url = [API_BASE, `?upc=${upc}&appId=${appId}&appKey=${appKey}`].join('')
  return window.fetch(url).then(r => r.json())
}

const query = (query) => {
  const url = [API_BASE, `?fields=nf_ingredient_statement%2&appId=${appId}&appKey=${appKey}`].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(r => r.json())
}

// nf_ingredient_statement is what I need

export { get, query }
