import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    pagesetup: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column'
    },

    safeareaview: {
        flex: 1
    },

    splashheader_view: {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        flexBasis: '20%',
        justifyContent: 'flex-end'
    },

    splashheader_text: {
        color: '#ceb786',
        fontSize: 30,
        position: 'absolute',
    },

    splashimage_view: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '60%',
    },

    splashimage_image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        alignSelf: 'center',
    },

    bottomtext_view: {
        flex: 1,
        backgroundColor: 'transparent',
        flexBasis: '20%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})