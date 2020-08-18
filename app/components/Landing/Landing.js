import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Linking } from 'react-native';
import { Button as NBButton, Text as NBText, Icon as NBIcon, Thumbnail as NBThumbnail, } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Landingstyles'
import InAppBrowser from 'react-native-inappbrowser-reborn'

class Landing extends Component {

    /**use this if u want to hide the default back icon which appears on this page when someone navigates to it */
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);
        this.state = {

        }

        this.open_news_page = this.open_news_page.bind(this);
        this.open_radio_page = this.open_radio_page.bind(this);
    }

    open_news_page() {
        this.props.navigation.navigate('News')
    }

    open_radio_page() {
        this.props.navigation.navigate('Radio')
    }

    async openLink() {
        try {
            const url = 'https://tugerradio.com/'
            if (await InAppBrowser.isAvailable()) {
                const result = await InAppBrowser.open(url, {
                    // iOS Properties
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: '#453AA4',
                    preferredControlTintColor: 'white',
                    readerMode: false,
                    animated: true,
                    modalPresentationStyle: 'overFullScreen',
                    modalTransitionStyle: 'partialCurl',
                    modalEnabled: true,
                    enableBarCollapsing: false,
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#6200EE',
                    secondaryToolbarColor: 'black',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,
                    // Specify full animation resource identifier(package:anim/name)
                    // or only resource name(in case of animation bundled with app).
                    animations: {
                        startEnter: 'slide_in_right',
                        startExit: 'slide_out_left',
                        endEnter: 'slide_in_left',
                        endExit: 'slide_out_right'
                    },
                    headers: {
                        'my-custom-header': 'my custom header value'
                    }
                })
                // alert(JSON.stringify(result))   /**user decides not to open the browser */
            }
            else Linking.openURL(url)
        } catch (error) {
            alert(error.message)
        }
    }

    render() {

        /**whenver we want to use a class for an element we add the class(id) to the curly brackets and separate them by commas */
        const { safeareaview, pagesetup, headerview, headertext, headerimage, body, upper_body, lower_body, button, button_icon, button_text } = styles

        return (

            <SafeAreaView style={styles.safeareaview}>
                <View style={styles.pagesetup}>
                    <StatusBar backgroundColor='#000000' barStyle='light-content' />

                    <View style={styles.headerview}>
                        <Image source={require("../../assets/logo.jpg")} style={styles.headerimage} />
                    </View>

                    <View style={styles.body}>

                        <View style={styles.upper_body}>

                            <NBButton full iconLeft transparent warning bordered style={styles.button} onPress={() => { this.openLink() }}>
                                <NBIcon style={styles.button_icon} name='newspaper-sharp' />
                                <Text style={styles.button_text}>News</Text>
                            </NBButton>

                            <NBButton full iconLeft transparent warning bordered style={styles.button} onPress={() => { this.open_radio_page() }}>
                                <NBIcon style={styles.button_icon} name='radio-outline' />
                                <Text style={styles.button_text}>Radio</Text>
                            </NBButton>

                        </View>

                        <View style={styles.lower_body}>
                        </View>

                    </View>


                </View>
            </SafeAreaView>
        );
    }
}

export default Landing;
