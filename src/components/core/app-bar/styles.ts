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
        alignContent: 'space-between'


    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
        padding: 20,
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    login: {
        padding: 20,
        justifyContent: 'flex-end'
    },
    loginButton: {
        color: 'white',
        borderColor: 'white',
        ':hover': {
            background: 'white',
            color: 'black',



        }
    }
})
