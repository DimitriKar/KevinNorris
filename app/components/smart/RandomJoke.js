
import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

import { GroceryList } from '../dummy'

export default class RandomJoke extends Component {

    /** lifecycle methods */
    constructor(props) {
        super(props);

        /** creating state */
        this.state = { joke : "" };
        this.id = null
    }

    componentDidMount() {
        const id = setInterval(() => this.handleJoke(), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }


    /** methods */
    async handleJoke() {
       const res = await fetch("https://api.chucknorris.io/jokes/random")
       const {value} = await res.json()
       this.setState({ joke:value })
    }

    addItem() {
        const { list, item } = this.state
        // ajouter item à la list
        // affiche item en 1ere position puis affiche le reste de la liste
        this.setState({ list: [item, ...list], item: "" })
    }

    render() {

        const { joke, loaded } = this.state

        return (
            <View style={container}>
            {
                loaded ?
                   <Text style={randomJoke}> {joke} </Text> :
                <View>
                    <Text> Loading ... </Text>
                    <ActivityIndicator size="large" color="#0000FF" />
                </View>
            }
                
            </View>
        );
    }
}

const { container, randomJoke } = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    randomJoke : {
        padding : 10,
        backgroundColor : "#30d0fe",
        margin : 5,
        color : "white",
        fontSize : 25,
        textAlign : "center",
        borderRadius: 20
    }

});
