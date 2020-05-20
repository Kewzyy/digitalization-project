import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 96px)',
    top: '96px',
    position: 'relative',
    backgroundColor: '#f9f9f9',
    overflow: 'auto',
    minWidth: 405,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridListTileBarTitle: {
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
      transform: 'scale(2)',
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  price: {
    float: 'right',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    marginTop: 20,
    marginBottom: 50,
  },
})
