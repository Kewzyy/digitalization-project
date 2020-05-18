import { API_USERNAME, API_PASSWORD, API_HOST } from 'src/config/env-config'
const axios = require('axios').default

const apiAuth = {
  username: API_USERNAME,
  password: API_PASSWORD,
}

export const getUsers = async (callback: () => {}) => {
  try {
    const response = await axios.get(API_HOST + '/users', {
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
  return axios.get(API_HOST + '/users/meals', {
    auth: apiAuth,
  })
}

export const getOrders = () => {
  return axios.get(API_HOST + '/kitchen/orders', {
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
    API_HOST + '/users/add',
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
