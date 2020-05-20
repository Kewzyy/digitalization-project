import React from 'react'
import { css } from 'aphrodite'
import { CartPagePropsType } from './types'
import { styles } from './styles'
import { MealType } from 'src/types'
import { FoodCard } from 'src/components/core/food-card'
import { OrderTotal } from 'src/components/core/order-total'
import { Appbar } from 'src/components/core/app-bar'
import { Paper } from '@material-ui/core'
import { postOrder } from 'src/api/requests'
import { useHistory } from 'react-router-dom'
import { SUCCESS_PAGE_ROUTE } from 'src/constants'
import { getRandomInt } from 'src/functions/helper-functions'

export const CartPage: React.FC<CartPagePropsType> = props => {
  const [
    orderSubmitted,
    setOrderSubmitted,
  ] = React.useState(false)
  const [
    order,
    setOrder,
  ] = React.useState([])
  const history = useHistory()

  const _id = '5ec2ca07bed7192183569644'
  const orderObject = {
    userId: _id,
    meals: order,
    table: getRandomInt(1, 10).toString(),
    status: 'NEW',
  }
  const handleOrder = () => {
    postOrder(orderObject.userId, orderObject.meals, orderObject.table, orderObject.status)
      .then((r: any) => {
        if (r.status === 200) {
          setOrderSubmitted(true)
        }
      })
      .catch((e: any) => {
        console.log('Error while sending order ', e)
      })
  }
  React.useEffect(
    () => {
      if (orderSubmitted) {
        history.push(SUCCESS_PAGE_ROUTE)
      }
    },
    [
      orderSubmitted,
    ],
  )
  React.useEffect(() => {
    if (localStorage && localStorage.getItem('order') && localStorage.getItem('order') !== null) {
      const storageOrder = JSON.parse(localStorage.getItem('order') || '')
      setOrder(storageOrder)
    }
  }, [])
  return (
    <React.Fragment>
      <Appbar darkTheme />
      <div className={css(styles.root)}>
        <Paper elevation={1}>
          <div className={css(styles.container)}>
            <div className={css(styles.containerRight)}>
              {order.map((item: MealType) => {
                return (
                  <FoodCard
                    added
                    key={`${item._id}-key`}
                    title={item.name}
                    price={item.price}
                    id={item._id}
                    meal={item}
                  />
                )
              })}
            </div>
            <div className={css(styles.containerLeft)}>
              <OrderTotal order={order} payAction={handleOrder} />
            </div>
          </div>
        </Paper>
      </div>
    </React.Fragment>
  )
}
