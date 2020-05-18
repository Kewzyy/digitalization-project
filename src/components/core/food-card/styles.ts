import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    width: 550,
    height: 225,
    marginBottom: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 15,
    minWidth: 405,
  },
  addPanel: {
    width: '20%',
    minWidth: 35,
  },
  infoPanel: {
    display: 'flex',
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 220,
  },
  infoItem: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingRight: 15,
  },
  imgPanel: {
    width: '40%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 5,
    border: '1px solid white',
    minWidth: 150,
    height: 'auto',
  },
})
