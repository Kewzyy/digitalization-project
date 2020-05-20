import * as React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'

import { KitchenPageProps } from './types'
import { styles } from './styles'
import { getUsers, getOrders } from 'src/api/requests'
import { KitchenAppbar } from 'src/components/core/kitchen-app-bar'
import { KitchenStats } from 'src/types'
import { OrderType } from 'src/types/order-type'
import { KitchenOrder } from 'src/components/core/kitchen-order'

export const KitchenPage: React.FC<KitchenPageProps> = () => {
  const [
    orders,
    setOrders,
  ] = React.useState<OrderType[]>([])
  const [
    kitchenStats,
    setKitchenStats,
  ] = React.useState<KitchenStats>({})

  React.useEffect(() => {
    getOrders()
      .then((r: any) => {
        console.log(r.data)
        setOrders(r.data)
        const activeOrders = r.data.length
        setKitchenStats({ activeOrders: activeOrders })
      })
      .catch((e: any) => {})
  }, [])

  return (
    <div className={css(styles.root)}>
      <KitchenAppbar
        activeOrders={kitchenStats.activeOrders}
        acceptedOrders={kitchenStats.acceptedOrders}
      />

      {orders.map(order => {
        return <KitchenOrder key={order._id} order={order} />
      })}
    </div>
  )
}
