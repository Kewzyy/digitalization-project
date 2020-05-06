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
  gridListTileBarTitle:{
    overflow: 'hidden',
  },
  gridList: {
    maxWidth: '80%',
  },
  tile: {
    cursor: 'pointer',
    minWidth: '280px',
    justifyContent: 'center',
  },
  tileImg: {
    transition: 'transform 1s, filter .3s ease-out',
    transformOrigin: '75% 95%',
    ':hover': {
      transform: 'scale(2)'
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  price: {
    float: 'right',
  },
})
