import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import img from  '../media/a.png';

StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, txt: 'Khoa Pham' };
        this.up = this.up.bind(this);
    }

    up() {
        this.setState(prevState => ({ value: prevState.value + 1 }))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.txt}
                    onChangeText={x => this.setState({ txt: x })}
                />
                <Text style={styles.title}>{this.state.value}</Text> 
                <TouchableOpacity style={styles.button} onPress={this.up}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SHOW</Text>
                </TouchableOpacity>
                <Image source={img} />
                <Image 
                    source={{ uri: "https://avatars2.githubusercontent.com/u/17959025" }}
                    style={{ width: 50, height: 50 }}
                />
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
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        margin: 10
    }
});
