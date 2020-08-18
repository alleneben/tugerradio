import React, { Component } from 'react'
import { View, Button, Text, Image, StatusBar, Alert, TouchableWithoutFeedback } from 'react-native'
import styles from './Splashstyles'
import SafeAreaView from 'react-native-safe-area-view';


/**import animation...........1 */
import * as Animatable from 'react-native-animatable';


class Splash extends Component {

    /**use this if u want to hide the default back icon which appears on this page when someone navigates to it */
    static navigationOptions = {
        headerShown: false
    }

    constructor(props) {
        super(props);

        this.state = {
            bottom_text_color: 'transparent' /**we hide the buttom text by default and show it by changing its color when the his animation is called */
        }
    }


    componentDidMount() {


        /**define animation reference....3 */

        /**************text animaton  ************ */
        /**splash header first animation */
        this.textRef.zoomIn(1000).then(() => {
        });

        /**splash header second animation */
        setTimeout(() => {
            this.textRef.pulse(2000)
        }, 5000);

        /**splash header 3rd animation */
        setTimeout(() => {
            this.textRef.zoomOut(1500)
        }, 7500);


        /****************image animation *************/
        /**splash image first animation */
        this.imageRef.zoomIn(1000).then(() => {
        });

        /**splash image second animation */
        setTimeout(() => {
            this.imageRef.pulse(2000)
        }, 5000);

        /**splash image 3rd animation */
        setTimeout(() => {
            this.imageRef.zoomOut(1500)
        }, 7500);


        /***************bottom text animation********** */
        /**bottom text first animation */
        setTimeout(() => {
            /**we now display our text before showing the animation */
            this.setState({ bottom_text_color: '#ceb786' })

            this.bottomtext.slideInLeft(1000)   //first value is the speed with which it animates
        }, 3000);   //second value is the delay time

        /**bottom text second animation */
        setTimeout(() => {
            this.bottomtext.jello(2000)
        }, 5000);

        /**bottom text 3rd animation */
        setTimeout(() => {
            this.bottomtext.fadeOutRight(1500)
        }, 7500);


        /**finally navigate to our landing page after all animations have completed */
        setTimeout(() => { this.props.navigation.navigate('Landing') }, 8000);
    }



    render() {

        /**whenver we want to use a class for an element we add the class(id) to the curly brackets and separate them by commas */
        const { safeareaview, splashheader_view, splashheader_text, pagesetup, splashimage_view, splashimage_image, bottomtext_view } = styles

        return (

            <SafeAreaView style={styles.safeareaview}>
                <View style={styles.pagesetup}>

                    {/**status bar styling */}
                    <StatusBar backgroundColor="#000000" barStyle="light-content" />


                    {/**splash header view */}
                    <View style={styles.splashheader_view}>
                        {/**create animation reference...........2 */}
                        <Animatable.Text
                            ref={textelement => this.textRef = textelement}
                            style={styles.splashheader_text}>
                            Tuger Radio
                    </Animatable.Text>
                    </View>

                    {/**splash image view */}
                    <View style={styles.splashimage_view}>
                        <Animatable.Image
                            ref={imageelement => this.imageRef = imageelement}
                            source={require("../../assets/logo.jpg")}
                            style={styles.splashimage_image} />
                    </View>

                    {/**bottom text view */}
                    <View style={styles.bottomtext_view}>
                        < Animatable.Text
                            ref={textelement => this.bottomtext = textelement}
                            style={{ fontStyle: 'italic', fontSize: 20, color: this.state.bottom_text_color }}>
                            Infotainment at its best
                    </Animatable.Text>

                    </View>

                </View>
            </SafeAreaView >
        )

    }




}

export default Splash