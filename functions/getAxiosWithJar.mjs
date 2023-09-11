import axios from 'axios'
import { wrapper } from 'axios-cookiejar-support'
import { CookieJar } from 'tough-cookie'

const getAxiosWithJar = () => {
  const jar = new CookieJar()
  const client = wrapper(axios.create({ jar }))
  return { axios: client, jar }
}

export default getAxiosWithJar
