
import React, { Component } from 'react';
import { Text, ActivityIndicator, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { w, h } from '../../../constants'
import { Container, Header, Content, Footer } from '../dummy/layout/Layout';

export default class RandomJoke extends Component {

    /** methods */
    /**
     * Method that fetches a new joke and adds it to the state
     * @returns {Promise<void>}
     */
    async handleJoke() {
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        const { value } = await res.json()
        this.setState({ joke: value })
    }

    /**
    * Method that stops the current interval and fetches a joke
    * At the end it restarts the interval loop
    * @returns {Promise<void>}
    */
    async handlePress() {
        clearInterval(this.id);
        await this.handleJoke();
        this.start();
    }

    /**
     * Method that starts the setInterval
     * that will fetch a new joke every 10 seconds
     */
    start() {
        this.id = setInterval(() => this.handleJoke(), 10000);
    }

    /**
     *  lifecycle methods 
     * */
    /**
     * Entry point of the component
     *  -> creates the state with default values
     *  -> sets the id to null
     *
     * @param props
     */
    constructor(props) {
        super(props);

        /** creating state */
        this.state = { joke: "", loaded: false };
        this.id = null
    }

    /**
    * Render method that is immediately
    *  called after constructor ends and called at any moment setState is invoked
    *
    * @returns {*}
    */
    render() {

        const { joke, loaded } = this.state

        return (

            <Container>
                <Header 
                    title="Chuck Norris Jokes"
                />
                <Content>

                <Image
                        style={image}
                        source={{ uri: "https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png" }}
                    />
                    {
                        loaded ?
                            <TouchableHighlight style={button} onPress={() => this.handlePress()}>
                                <Text style={randomJoke}>{joke}</Text>
                            </TouchableHighlight> :
                            <View>
                                <Text> Loading ... </Text>
                                <ActivityIndicator size="large" color="#0000FF" />
                            </View>
                    }
                </Content>

                <Footer>
                    <Text>hfhf</Text>
                </Footer>
            </Container>
        );
    }

    /**
     * Method called after the first render is called
     *
     * Fetches the initial joke, then sets the loaded to true and starts the interval
     */
    componentDidMount() {
        this.handleJoke().then(() => {
            this.setState({ loaded: true });
            this.start();
        });
    }

    /**
    * Method that is called when the component will unmount.
    * Stops the interval if there is one running
    */
    componentWillUnmount() {
        clearInterval(this.id);
    }
}

/**
 * STYLES
 */

const { container, randomJoke, button, image } = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    randomJoke: {
        padding: 10,
        backgroundColor: "#30d0fe",
        margin: 5,
        color: "white",
        fontSize: 25,
        textAlign: "center",
        borderRadius: 20
    },
    button: {
        padding: 10,
        margin: 5,
    },
    image: {
        width: w / 2,
        height: h / 3,
        resizeMode: 'contain'
    }

});
