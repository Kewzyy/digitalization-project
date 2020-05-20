import { StyleSheet } from 'aphrodite'
import { theme } from 'src/config/theme'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    width: 300,
    minHeight: 600,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
  },
  orderHeader: { paddingTop: 20 },
  buttonPanel: {
    display: 'flex',
    position: 'absolute',
    bottom: 5,
    width: 'auto',
  },
  success: {
    color: 'white',
    backgroundColor: theme.palette.success.main,
  },
  danger: {
    color: 'white',
    backgroundColor: theme.palette.error.dark,
  },
  action: {
    color: 'white',
    backgroundColor: theme.palette.primary.light,
  },
})
