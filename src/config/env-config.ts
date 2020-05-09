import * as dotenv from 'dotenv'

dotenv.config()
let path
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../../.env.test`
    break
  case 'production':
    path = `${__dirname}/../../.env`
    break
  default:
    path = `${__dirname}/../../.env.development`
}
dotenv.config({ path: path })

export const API_USERNAME = process.env.API_USERNAME
console.log('API_USERNAME', API_USERNAME)
export const API_PASSWORD = process.env.API_PASSWORD
