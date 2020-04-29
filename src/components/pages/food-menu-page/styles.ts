import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#ff9966',
    backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)',
  },
  gridList: {
    width: '75%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  price: {
    float: 'right',
  },
})
