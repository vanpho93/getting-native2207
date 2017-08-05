import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Text style={styles.title}>Khoa Pham</Text> 
               <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText}>Add</Text>
               </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 15,
        alignItems: 'center'
    },
    title: {
        color: 'blue',
        fontSize: 25
    },
    button: {
        padding: 20,
        backgroundColor: '#6F5595',
        width: 100,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    }
});
