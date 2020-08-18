import React, { Component } from 'react';
import { View, StatusBar, Dimensions, ScrollView } from 'react-native';
import {
    Container, Content, Button as NBButton, Text as NBText, Body,
    Icon as NBIcon, Thumbnail as NBThumbnail, Left,
    List, ListItem
} from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid'
import SafeAreaView from 'react-native-safe-area-view';
import styles from './Newsstyles'
import Newsitemmodal from '../Newsitemmodal/Newsitemmodal'
import HTML from 'react-native-render-html';


const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

const htmltext = '';

class News extends Component {

    static navigationOptions = {
        title: 'News',

        /**headerstyle is the view that wraps the header */
        headerStyle: {
            backgroundColor: '#845c2c',
        },

        headerTintColor: 'white',    /**color of both back button and title */

        /**styling the title */
        headerTitleStyle: {
            color: 'white'
        },
    }

    constructor(props) {
        super(props);

        this.state = {
            news_table: []
        }

        this.viewnewsitem = this.viewnewsitem.bind(this)
        this.fetch_news = this.fetch_news.bind(this)
    }

    componentDidMount() {
        this.fetch_news()
    }


    fetch_news() {
        fetch('https://tugerradio.com/wp-json/wp/v2/posts', {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'text/plain',
            },
        }).then((response) => response.text())
            .then((responseJson) => {
                // console.log(responseJson)

                var jsonconvertedrows = JSON.parse(responseJson)
                this.setState({ news_table: jsonconvertedrows })

                console.log('news table :', this.state.news_table)

                console.log('one news excerpt: ', this.state.news_table[0].excerpt.rendered)

                console.log('documentation html sample: ', htmlContent)
            })

    }

    render() {

        /**whenver we want to use a class for an element we add the class(id) to the curly brackets and separate them by commas */
        const { safeareaview, pagesetup, container, listitem, listitem_left, listitem_thumbnail, listitem_body, listitem_header_text, listitem_body_text } = styles

        return (

            <SafeAreaView style={styles.safeareaview}>
                <View style={styles.pagesetup}>
                    <StatusBar backgroundColor='#000000' barStyle='light-content' />

                    <ScrollView style={{ flex: 1 }}>

                        <Grid style={{ backgroundColor: 'reds' }}>
                            <Col style={{ backgroundColor: 'yellows' }}>
                                {
                                    this.state.news_table.map((count) => {
                                        return (
                                            <Row style={{ backgroundColor: 'blues', paddingLeft: 5, paddingRight: 5, paddingTop: 10 }} key={count.id} onPress={() => { this.viewnewsitem() }}>
                                                <Col style={{ backgroundColor: 'pinks' }}>
                                                    <Row style={{ backgroundColor: 'reds', marginBottom: -10 }}>
                                                        <HTML html={count.title.rendered} imagesMaxWidth={Dimensions.get('window').width} containerStyle={{ backgroundColor: 'yellows' }} />
                                                    </Row>
                                                    <Row style={{ backgroundColor: 'reds' }}>
                                                        <HTML html={count.excerpt.rendered} imagesMaxWidth={Dimensions.get('window').width} containerStyle={{ backgroundColor: 'yellows' }} />
                                                    </Row>
                                                    <Row style={{ backgroundColor: 'yellows', paddingTop: 0, marginTop: -15, justifyContent: 'flex-end' }}>
                                                        <NBText note style={{ color: 'black' }}>{count.date}</NBText>
                                                    </Row>
                                                    <Row style={{ backgroundColor: 'black' }}>
                                                        <View style={{ borderBottomColor: 'transparent', borderBottomWidth: 1, }} />
                                                    </Row>
                                                </Col>
                                            </Row>
                                        )
                                    })
                                }

                            </Col>
                        </Grid>
                    </ScrollView>
                    <Newsitemmodal ref={'newsitemmodalref'}></Newsitemmodal>
                </View>

            </SafeAreaView>
        );
    }


    /**open news item modal */
    viewnewsitem() {
        this.refs.newsitemmodalref.showModal()
    }
}

export default News;
