import { getOrders } from 'src/api/requests'

export const fetchOrders = () => (dispatch: any) => {
  console.log('fetching orders')
  getOrders().then((res: any) => {
    dispatch({
      type: 'FETCH_ORDERS',
      payload: res.data,
    })
  })
}
