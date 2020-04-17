import { StyleSheet, css } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bgMain: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  bgOne: {
    backgroundImage:
      'linear-gradient(135deg, rgba(225, 238, 195, 0.25), rgba(240, 80, 83, 0.3)), url(/img/uns1.jpg)',
  },
  bgTwo: {
    backgroundImage:
      'linear-gradient(135deg, rgba(225, 238, 195, 0.25), rgba(240, 80, 83, 0.3)), url(/img/uns2.jpg)',
  },
  bgThree: {
    backgroundImage:
      'linear-gradient(0deg, rgba(225, 238, 195, 0.25), rgba(240, 80, 83, 0.3)), url(/img/uns3.jpg)',
  },
  content: {
    flex: '0 0 1',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  signUpButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 50px',
    marginTop: 20,
  },
})

export const rootStyles = css([
  styles.root,
  styles.bgMain,
  styles.bgOne,
])
