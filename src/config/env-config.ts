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

export const API_USERNAME = process.env.REACT_APP_API_USERNAME
export const API_PASSWORD = process.env.REACT_APP_API_PASSWORD
export const API_HOST = process.env.REACT_APP_API_HOST
