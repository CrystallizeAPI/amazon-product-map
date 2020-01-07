const ApiBuilder = require('claudia-api-builder')
const postProductInfo = require('./lib/api-caller')

const api = new ApiBuilder()

api.get('/', () => {
  return {
    sucess: true
  }
})

api.post('/', async request => {
  try {
    const response = await postProductInfo(request.body)

    return response
  } catch (error) {
    return error
  }
})

module.exports = api
