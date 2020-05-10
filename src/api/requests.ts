import { API_USERNAME, API_PASSWORD } from 'src/config/env-config'
const axios = require('axios').default

const apiAuth = {
  // username: API_USERNAME,
  // password: API_PASSWORD,
  username: 'dineadmin',
  password: 'k83i3iza',
}

export const getUsers = async (callback: () => {}) => {
  try {
    const response = await axios.get('http://85.254.219.209:5000/users', {
      auth: apiAuth,
    })
    console.log('Response', response)
    callback()
  } catch (error) {
    console.log('Error while fetching users/all')
    return error
  }
}

export const getMeals = async () => {
  return axios.get('http://85.254.219.209:5000/users/meals', {
    auth: apiAuth,
  })
}

export const getOrders = () => {
  return axios.get('http://85.254.219.209:5000/kitchen/orders', {
    auth: apiAuth,
  })
}

//I dunno man, seems sketch
export const addUser = async (
  fullName: string,
  email: string,
  password: string,
  callback?: () => {},
) => {
  const request = await axios.post(
    'http://85.254.219.209:5000/users/add',
    {
      name: fullName,
      email: email,
      password: password,
    },
    {
      auth: apiAuth,
    },
  )
  console.log('adduser', request)
  if (callback) {
    callback()
  }
}
