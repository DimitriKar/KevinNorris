import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { w, h } from '../../../../constants'


export const Container = props => {
    const { children = null } = props
    return (
        <View style={container}>
            {children}
        </View>
    )
}

export const Content = props => {
    const { children = null } = props
    return (
        <View style={[container, content]}>
            {children}
        </View>
    )
}

export const Header = props => {
    const { title } = props
    return (
        <View style={header}>
            <Text style={headerText}> {title} </Text>
        </View>
    )
}

export const Footer = props => {
    const { children = null } = props
    return (
        <View style={footer}>
            {children}
        </View>
    )
}

/**
 * STYLES
 */

const { container, content, header, footer, headerText } = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    content: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        flexBasis: 50,
        flexShrink: 0,
        backgroundColor: "#30d0fe",
        alignItems : "center",
        justifyContent : "center"

    },
    footer: {
        flexBasis: 80,
        flexShrink: 0,
        backgroundColor: "#30d0fe",
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        width: w - 40,
        fontFamily: 'AvenirNext-DemiBold',
        textAlign : "center"
        // paddingTop: 50
    }

});
