const API_BASE = 'https://api.nutritionix.com/v1_1/search'
const appkey = '1ed97d8b84e2fc216cfe4311607deea9'
const appId = 'fa7feea6'

const get = (path, params = {}) => {
  const url = [API_BASE, '?', '&appId=', appId, '&appKey=', appkey].join('')
  return window.fetch(url).then(r => r.json())
}

export { get }
