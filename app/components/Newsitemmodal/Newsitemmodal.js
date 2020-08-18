import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Header, Content, Button as NBButton, Text as NBText, Icon as NBIcon, Title, Thumbnail as NBThumbnail, } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window')

class Newsitemmodal extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <Modal
                    ref={"newsitemModal"}
                    position='center'
                    onClosed={() => { this.closeModal() }}
                    backdrop={false}
                    style={{ backgroundColor: 'black', width: screen.width, height: screen.height }}
                >



                    {/**header */}
                    <Header
                        noShadow
                        onPress={() => { Keyboard.dismiss }} style={{
                            backgroundColor: 'black',
                            paddingLeft: 0, paddingRight: 0,
                            marginTop: 10
                        }}>

                        <Grid>
                            <Row>
                                <Col style={{ width: '90%', backgroundColor: 'resd', justifyContent: 'center', paddingLeft: 10 }}>
                                    <Title numberOfLines={3} style={{ fontSize: 15, fontWeight: 'bold', color: 'white', paddingTop: 5, paddingBottom: 5, lineHeight: 20, letterSpacing: 1 }}>
                                        Trump warns of 'violence' if Democrats win Democrats win
                                    </Title>
                                    {/**line */}
                                    {/* <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, }} /> */}
                                </Col>

                                <Col style={{ width: '10%', backgroundColor: 'yellsow', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <NBIcon name="close-circle" style={{ color: '#845c2c', fontSize: 24 }} onPress={() => this.closeModal()} />
                                </Col>
                            </Row>
                        </Grid>
                    </Header>

                    <ScrollView
                    // keyboardDismissMode='on-drag'
                    // scrollEventThrottle={50}
                    // onScroll={this.scrollpage.bind(this)}
                    >
                        <Content padder>
                            <View>
                                <Image style={{ width: screen.width - 20, height: 250 }} source={{ uri: 'https://e3.365dm.com/20/01/2048x1152/skynews-donald-trump-boris-johnson_4884163.jpg' }} />
                            </View>

                            <View>
                                <NBText style={{ lineHeight: 30, fontSize: 14, color: 'white', letterSpacing: 0 }}>US President Donald Trump has warned that his policies will be "violently" overturned if the Democrats win November's mid-term elections.

                                He told Evangelical leaders that the vote was a "referendum" on freedom of speech and religion, and that these were threatened by "violent people".

                                He appealed to conservative Christian groups for help, saying they were one vote away from "losing everything".

                                Mid-term elections are widely seen as a test of the president's popularity.

                                Mr Trump has been battling negative publicity after his ex-lawyer and former campaign chief were convicted earlier this month.

                                Can we tell now if Democrats will win US election?
                                Why US mid-term elections matter
                                Will Trump remain bulletproof?
                                </NBText>
                            </View>
                        </Content>
                    </ScrollView>

                </Modal>

            </TouchableWithoutFeedback >
        );
    }

    /**open modal from another page using this func */
    showModal() {
        this.refs.newsitemModal.open()
    }

    /**close this modal */
    closeModal() {
        this.refs.newsitemModal.close()
    }

    scrollpage(event) {
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        // console.warn('offsetY-->' + y);
        // console.warn('height-->' + height);
        // console.warn('contentHeight-->' + contentHeight);

        /**code here is executed when we reach the bottom of the page and we still are scrolling */
        if (y + height >= contentHeight - 20) {
            // this.setState({ showbottomspinner: true })

            //load old messages
            // this.loadoldmessages();
        }

        /**code here is executed when we reach the top of the page and we still are scrolling */
        if (y <= 5) {
            // this.setState({ showtopspinner: true })

            //load new messages
            // this.loadnewmessages();
        }
    }


}

export default Newsitemmodal;
