import * as React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Appbar } from 'src/components/core/app-bar'
import { css } from 'aphrodite'

import { KitchenPageProps } from './types'
import { styles } from './styles'
import { getUsers, getOrders } from 'src/api/requests'

export const KitchenPage: React.FC<KitchenPageProps> = () => {
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        getOrders().then((r: any) => {
            setOrders(r.data)
        }
        ).catch((e: any) => { })
    }, [])

    return (
        <div className={css(styles.root)}>
            <h1>Kitchen Orders</h1>
            <br />
            <div className={css(styles.orders)}>
                {orders.map((item: any) => (
                    <div className={css(styles.order)} key={item._id}>
                        <h3>Order #{item._id}</h3>
                        <h3>Table #{item.tableId}</h3>
                        <br />
                        {item.meals.map((meal: any) => (
                            <p key={meal._id}>
                                {`${meal.name}: € ${meal.price.toFixed(2)}`}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    )
}
