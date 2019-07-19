import request from 'request'
import config from './config'

const getToken = () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: config.url,
      headers: { 'content-type': 'application/json' },
      body: `{"client_id":"${config.client_id}","client_secret":"${
        config.client_secret
      }","audience":"${config.audience}","grant_type":"client_credentials"}`
    }

    request(options, function(error, response, body) {
      if (error) reject(new Error(error))
      resolve(JSON.parse(body))
    })
  })
}

const getTodos = token => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: config.getUrl,
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    request(options, function(error, response, body) {
      if (error) reject(new Error(error))
      resolve(body)
    })
  })
}

const testGetTodos = async () => {
  const r1 = await getToken()
  const accessToken = r1.access_token
  const r2 = await getTodos(accessToken)
  console.log('r2', r2)
}

testGetTodos()


