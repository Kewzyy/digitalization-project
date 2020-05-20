import * as React from 'react'
import { KitchenOrderPropsType } from './types'
import { Paper, Table, TableBody, TableCell, Typography, TableRow, Button } from '@material-ui/core'
import { css } from 'aphrodite'
import { styles } from './styles'
import { deleteOrder, postOrder } from 'src/api/requests'
import { useDispatch } from 'react-redux'
import { UPDATE_ORDERS } from 'src/store/actions/update-orders'
import { getDateTime } from 'src/functions/helper-functions'
import { OrderType } from 'src/types/order-type'

export const KitchenOrder: React.FC<KitchenOrderPropsType> = ({ order }) => {
  const [
    acceptedOrder,
    setAcceptedOrder,
  ] = React.useState(false)
  const dispatch = useDispatch()

  const handleDeleteOrder = (id: string) => {
    deleteOrder(id).then((res: any) => {})
  }
  const handleServe = (order: OrderType) => {
    postOrder(order.userId, order.meals, order.tableId, 'READY_TO_SERVE')
      .then((r: any) => {
        if (r.status === 200) {
          deleteOrder(order._id).then((res: any) => {})
        }
      })
      .catch((e: any) => {
        console.log('Error while sending order ', e)
      })
  }

  console.log('order', order)
  return (
    <Paper className={css(styles.root)}>
      <div>
        <div className={css(styles.orderHeader)}>
          <Typography variant='body1'>{`Table: ${order.tableId}`}</Typography>
          <Typography variant='body1'>{`Time: ${getDateTime(order.createdAt)}`}</Typography>
        </div>
        <Table>
          <TableBody>
            {order.meals.map(meal => {
              return (
                <TableRow key={meal._id}>
                  <TableCell align='center'> {`${meal.name}(${meal._id})`}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <div className={css(styles.buttonPanel)}>
          {!acceptedOrder && (
            <React.Fragment>
              <Button
                className={css(styles.success)}
                variant='contained'
                onClick={() => setAcceptedOrder(true)}>
                Accept
              </Button>
              <Button
                className={css(styles.danger)}
                variant='contained'
                onClick={() => handleDeleteOrder(order._id)}>
                Decline
              </Button>
            </React.Fragment>
          )}
          {acceptedOrder && (
            <Button
              className={css(styles.action)}
              variant='contained'
              onClick={() => handleServe(order)}>
              Ready to Serve
            </Button>
          )}
        </div>
      </div>
    </Paper>
  )
}
