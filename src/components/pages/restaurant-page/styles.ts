import { StyleSheet } from 'aphrodite'

export const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'calc(100vh - 96px)',
    top: '96px',
    position: 'relative',
    backgroundColor: '#f9f9f9',
    overflow: 'auto',
    '@media (max-width: 1520px)': {
      justifyContent: 'center',
    },
  },
})
