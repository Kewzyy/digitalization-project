import * as React from 'react'
import { OrderTotalProps } from './types'
import { css } from 'aphrodite'
import { styles } from './styles'
import { Table, TableBody, TableRow, TableCell, Button } from '@material-ui/core'
import { MealType } from 'src/types'
import { getOrderTotal } from 'src/functions/helper-functions'
export const OrderTotal: React.FC<OrderTotalProps> = ({ order, payAction }) => {
  const handleOrder = () => {}
  const [
    orderSubmitState,
    setOrderSubmitState,
  ] = React.useState(false)

  return (
    <div className={css(styles.root)}>
      <Table>
        <TableBody>
          {order.map((item: MealType) => {
            return (
              <TableRow>
                <TableCell align='left'>{item.name}</TableCell>
                <TableCell align='right'>{`${item.price} EUR`}</TableCell>
              </TableRow>
            )
          })}
          <TableRow>
            <TableCell align='left'>
              <b>Total</b>
            </TableCell>
            <TableCell align='right'>
              <b>{getOrderTotal(order) + ' EUR'}</b>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant='contained' color='primary' onClick={payAction}>
        Pay
      </Button>
    </div>
  )
}
