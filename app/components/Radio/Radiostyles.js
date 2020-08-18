import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeareaview: {
        flex: 1
    },

    pagesetup: {
        flex: 1
    },

    background_picture: {
        flex: 1, resizeMode: 'cover'
    },

    inner_pagesetup: {
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
    },

    logo_freguency_view: {
        backgroundColor: 'transparent', flexBasis: '45%', alignItems: 'center', justifyContent: 'center'
    },

    logo: {
        width: 180, height: 180
    },

    freq_text: {
        color: '#ceb786', fontSize: 20, paddingRight: 10
    },

    play_stop_icon_view: {
        backgroundColor: 'transparent', flexBasis: '35%', alignItems: 'center', justifyContent: 'center'
    },

    play_stop_button: {
        height: 100, width: 100, borderRadius: 50,
        justifyContent: 'center', borderWidth: 2, borderColor: '#ceb786'
        , backgroundColor: 'transparent'
    },

    play_stop_icon: {
        fontSize: 50, color: '#ceb786', paddingRight: 15
    },

    volume_slider_view: {
        backgroundColor: 'transparent', flexBasis: '20%', paddingLeft: 20, paddingRight: 15
    },

    volume_icon: {
        marginTop: 5, color: '#ceb786'
    },


})