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

export const CartPage: React.FC<CartPagePropsType> = props => {
  const [
    orderSubmitted,
    setOrderSubmitted,
  ] = React.useState(false)
  const history = useHistory()
  const mockOrderData: MealType[] = [
    {
      _id: 39,
      name: 'Black homemade pasta papardelle with tiger prawns, pineapples and curry',
      price: 13.95,
      type: 'pasta',
    },
    {
      _id: 62,
      name: 'Destill dark beer',
      price: 8,
      type: 'alcoholic drink',
    },
    {
      _id: 47,
      name: 'Oven baked sea bass fillets with spinach and Sicilian tomatoes',
      price: 14.95,
      type: 'seafood',
    },
  ]
  const _id = '5ec2ca07bed7192183569644'
  const orderObject = {
    _id: _id,
    meals: mockOrderData,
    table: '2',
    status: 'NEW',
  }
  const handleOrder = () => {
    postOrder(orderObject._id, orderObject.meals, orderObject.table, orderObject.status)
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
  return (
    <React.Fragment>
      <Appbar darkTheme />
      <div className={css(styles.root)}>
        <Paper elevation={1}>
          <div className={css(styles.container)}>
            <div className={css(styles.containerRight)}>
              {mockOrderData.map((item: MealType) => {
                return (
                  <FoodCard
                    added
                    key={`${item._id}-key`}
                    title={item.name}
                    price={item.price}
                    id={item._id}
                  />
                )
              })}
            </div>
            <div className={css(styles.containerLeft)}>
              <OrderTotal order={mockOrderData} payAction={handleOrder} />
            </div>
          </div>
        </Paper>
      </div>
    </React.Fragment>
  )
}
