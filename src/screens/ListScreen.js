import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friends #1', age: 41 },
        { name: 'Friends #2', age: 20 },
        { name: 'Friends #3', age: 45 },
        { name: 'Friends #4', age: 32 },
        { name: 'Friends #5', age: 27 },
        { name: 'Friends #6', age: 53 },
        { name: 'Friends #7', age: 30 },
        { name: 'Friends #8', age: 28 },
        { name: 'Friends #9', age: 19 },
    ];

    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                // element === { item: { name: 'Friends #1' }, index: 0 }
                // { item } === { name: 'Friends #1' }
                return <Text style={styles.textStyle}>
                    {item.name} - Age {item.age}
                </Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 10
    }
});

export default ListScreen;