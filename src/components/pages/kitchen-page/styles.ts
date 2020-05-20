import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    background: 'linear-gradient(#757f9a, #d7dde8)',
  },
  orders: {
    border: '1px gray solid',
    padding: '1em',
    overflowX: 'auto',
    display: 'flex',
  },
  order: {
    border: '1px gray solid',
    padding: '1em',
    marginBottom: '0.25em',
  },
  scrollWrapper: {},
})
