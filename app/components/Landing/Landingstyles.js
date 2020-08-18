import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    safeareaview: {
        flex: 1
    },

    /**background of page */
    pagesetup: {
        backgroundColor: 'black', flex: 1
    },

    headerview: {
        backgroundColor: 'transparent', alignItems: 'center', flexBasis: '55%', justifyContent: 'center', flex: 1
    },

    headerimage: {
        width: 150, height: 150
    },

    body: {
        backgroundColor: 'transparent', flexBasis: '45%', flex: 1
    },

    upper_body: {
        flex: 1, flexBasis: '40%', backgroundColor: 'transparent', justifyContent: 'center', paddingLeft: 20, paddingRight: 20
    },

    lower_body: {
        flex: 1, backgroundColor: 'transparent', flexBasis: '60%'
    },

    button: {
        marginTop: 5, marginBottom: 20, borderRadius: 5
    },

    button_icon: {
        color: '#ceb786', paddingRight: 5
    },

    button_text: {
        paddingRight: 20, paddingLeft: 5, color: '#ceb786'
    }

})