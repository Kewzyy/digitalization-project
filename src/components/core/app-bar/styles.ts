import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  appbar: {
    height: '96px',
    width: '100%',
    background: 'transparent',
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  darkAppBar: {
    height: '96px',
    width: '100%',
    background: 'white',
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
    padding: 20,
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  logoDark: {
    maxWidth: '100%',
    height: 'auto',
    padding: 20,
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  login: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  loginButton: {
    color: 'white',
    borderColor: 'white',
    ':hover': {
      background: 'white',
      color: 'black',
    },
  },
  loginButtonDark: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    ':hover': {
      background: 'white',
      color: 'black',
    },
  },
})
