import { API_USERNAME, API_PASSWORD, API_HOST } from 'src/config/env-config'
import { MealType } from 'src/types'
const axios = require('axios').default

const apiAuth = {
  username: API_USERNAME,
  password: API_PASSWORD,
}
//gets

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

// posts
export const postOrder = async (id: string, order: MealType[], tableId: string, status: string) => {
  return axios.post(
    API_HOST + `/users/${id}/order`,
    {
      meals: order,
      tableId: tableId,
      status: status,
    },
    {
      auth: apiAuth,
    },
  )
}
export const deleteOrder = async (id: string) => {
  return axios.delete(API_HOST + `/kitchen/order/${id}`, {
    auth: apiAuth,
  })
}

//I dunno man, seems sketch
export const addUser = async (fullName: string, email: string, password: string, callback?: () => {}) => {
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
