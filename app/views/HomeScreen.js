import React, { Component } from 'react';
import { Image, StyleSheet, Button } from 'react-native';
import { Container, Content } from '../components/dummy/layout/Layout';
import { w, h } from '../../constants'
import RandomJoke from '../components/smart/RandomJoke';

class HomeScreen extends Component {
    static navigationOptions = { title: "Home" };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Image
                        style={image}
                        source={{ uri: "https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png" }}
                    />
                    <RandomJoke/>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;

const { image } = StyleSheet.create({
    image: {
        width: w / 2,
        height: h / 3,
        resizeMode: 'contain'
    }

});
