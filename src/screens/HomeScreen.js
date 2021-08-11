import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title="Go to Components Demo"
            />
            <Button
                title="Go to List Demo"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Go to Image Demo"
                onPress={() => navigation.navigate('Image')}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('List')}
            >
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;