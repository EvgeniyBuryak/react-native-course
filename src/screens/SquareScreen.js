import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreen;