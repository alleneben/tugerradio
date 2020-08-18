import React, { Component } from 'react';
import {
    View, Text, Image,
    StatusBar, Dimensions,
    InteractionManager
} from 'react-native';
import { Spinner as NBSpinner, Button as NBButton, Text as NBText, Icon as NBIcon, Thumbnail as NBThumbnail } from 'native-base';
import styles from './Radiostyles'
import Slider from '@react-native-community/slider';
import SafeAreaView from 'react-native-safe-area-view';
import SoundPlayer from 'react-native-sound-player'
import Modulevariables from '../Modulevariables'
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';


var screen = Dimensions.get('window')

var onFinishedLoadingURLSubscription = null

class Radio extends Component {

    static navigationOptions = {
        title: 'Back',

        /**headerstyle is the view that wraps the header */
        headerStyle: {
            backgroundColor: 'black',
        },

        headerTintColor: '#ceb786',    /**color of both back button and title */

        /**styling the title */
        headerTitleStyle: {
            color: 'transparent'
        },
    }

    constructor(props) {
        super(props);

        this.state = {
            // radio_icon_state: 'play-sharp', //the state of the radio icon whether the user has pressed start or stop 
            radio_state: 'no feed',

            /**initial vlaue of our volume slide */
            volumesliderValue: 50,

            buffering_spinner: false
        }
    }

    componentDidMount() {

    }

    start_or_stop_radio() {
        if (Modulevariables.radio_icon_state == 'play-sharp') {

            /**play */
            this.setState({ radio_icon_state: 'play-sharp' })
            Modulevariables.radio_icon_state = 'play-sharp'
            this.setState({ radio_state: 'loading feed ...' })
            // this.setState({ buffering_state: true })
            this.setState({ buffering_spinner: true })

            setTimeout(() => {
                this.start_radio()
            }, 2000);



            /**change our icon */
            this.setState({ radio_icon_state: 'stop-sharp' })
            Modulevariables.radio_icon_state = 'stop-sharp'

        }
        else {

            /**stop radio */
            this.setState({ radio_icon_state: 'stop-sharp' })
            Modulevariables.radio_icon_state = 'stop-sharp'
            this.stop_radio()

            /**change our icon */
            this.setState({ radio_icon_state: 'play-sharp' })
            Modulevariables.radio_icon_state = 'play-sharp'

        }
    }

    start_radio = async () => {

        // https://s4.radio.co/sb0472ff73/listen
        // https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac
        // https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live
        // https://us3.internet-radio.com/proxy/currenthitsfm?mp=/live
        // https://uk7.internet-radio.com/proxy/radiomerge?mp=/stream
        // https://uk6.internet-radio.com/proxy/realdanceradio?mp=/live

        InteractionManager.runAfterInteractions(() => {
            // ...long-running synchronous task...
            SoundPlayer.loadUrl('https://s4.radio.co/sb0472ff73/listen')
        }).then(() => {
            onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
                // console.log('finished loading url', success, url)
                this.setState({ radio_state: 'feed loaded!' })
                // this.setState({ buffering_state: false })
                this.setState({ buffering_spinner: false })
                SoundPlayer.play()
            }, err => {
                console.warn(err)
            })
        })
    };

    stop_radio() {
        SoundPlayer.pause()
    }

    /**set volume of radio */
    setvolume(volume) {

        /**update value of volume slider */
        this.setState({ volumesliderValue: volume }, () => {

            /**react-native-soundplayer uses volume from 0 to 1
             * but our slider uses 0 to 100 step
             * hence each value in the slider should be divided by 100 so that the max volume in the slider which is 100 (divided by 100) will give us 1
             */
            volume = volume / 100
            SoundPlayer.setVolume(volume)   /**changing volume in soundplayer */
        })
    }


    render() {

        /**whenver we want to use a class for an element we add the class(id) to the curly brackets and separate them by commas */
        const { safeareaview, pagesetup, background_picture, inner_pagesetup, logo_freguency_view, logo, freq_text,
            play_stop_icon_view, play_stop_button, play_stop_icon, volume_slider_view, volume_icon } = styles

        return (

            <SafeAreaView style={styles.safeareaview}>

                <Spinner
                    overlayColor='transparent'  //background color of overlay
                    customIndicator={<Animatable.Image animation="rotate" iterationCount="infinite" source={require('../../assets/spinner.gif')} style={{ height: 45, width: 45 }} />}
                    visible={this.state.buffering_spinner}
                    textContent={'buffering ...'}   //text to display on overlay
                    textStyle={{ color: 'white' }}  //color of text
                    cancelable={true}   //allow the device back button to cancel spinner or hide it

                /**these props are only active if no customIndicator prop is used */
                // size='large'
                // color='red' //change color of spinner
                />

                <View style={styles.pagesetup}>

                    <StatusBar backgroundColor='#000000' barStyle='light-content' />

                    <Image source={require('../../assets/splash.jpg')} style={styles.background_picture} />

                    <View style={styles.inner_pagesetup}>

                        {/**tuger radio logo view */}
                        <View style={styles.logo_freguency_view}>
                            <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
                            <Text style={styles.freq_text}> Infotainment at its best</Text>
                            {/* <Text style={{ color: 'white' }}>{this.state.radio_state}</Text> */}
                        </View>


                        {/**play/stop icon view */}
                        <View style={styles.play_stop_icon_view}>
                            <View>
                                <NBButton rounded onPress={() => { this.start_or_stop_radio() }} style={styles.play_stop_button}><NBIcon name={Modulevariables.radio_icon_state} style={styles.play_stop_icon}></NBIcon></NBButton>
                            </View>
                        </View>


                        {/**volume slider view */}
                        <View style={styles.volume_slider_view}>

                            <View style={{ flexDirection: 'row' }}>
                                <NBIcon name='volume-mute-outline' style={styles.volume_icon}></NBIcon>
                                <Slider
                                    style={{ width: (screen.width / 1.4), height: 40 }}
                                    minimumValue={0}    //minimum slider value
                                    maximumValue={100}  //maximum slider value
                                    thumbTintColor='white' //color of slider 
                                    maximumTrackTintColor="white" //color of bar when slider is at mute level
                                    minimumTrackTintColor="#ceb786" //color of bar when slider is being dragged towards high volume  
                                    step={1} //increase or decrease slider value by step
                                    value={this.state.volumesliderValue}
                                    onValueChange={(volumesliderValue) => this.setvolume(volumesliderValue)}
                                />
                                <NBIcon name='volume-high-outline' style={styles.volume_icon}></NBIcon>
                            </View>

                            <View style={{ alignItems: 'center', paddingRight: 15 }}>
                                <NBText note style={{ color: 'white' }}>Volume: {this.state.volumesliderValue}</NBText>
                            </View>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

export default Radio;
