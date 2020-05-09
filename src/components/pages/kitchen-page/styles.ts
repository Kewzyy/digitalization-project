import { StyleSheet, css } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
      'linear-gradient(135deg, rgba(225, 238, 195, 0.25), rgba(240, 80, 83, 0.3))',
  },
  orders: {
      border: '1px gray solid',
      padding: '1em',
      overflowX: 'auto',
      display: 'flex'

  },
  order: {
    border: '1px gray solid',
    padding: '1em',
    marginBottom: '0.25em',
  },
})