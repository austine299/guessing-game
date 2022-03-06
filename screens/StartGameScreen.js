import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
    return(
        <View style={Styles.screen}>
            <View style={Styles.inputContainer}>
                <Text style={Styles.title}>Star a New Game!</Text>
                <TextInput/>
                <View style={Styles.buttonContainer}>
                    <Button title= "Reset" onPress={() =>{}}/>
                    <Button title= "Confirm" onPress={() =>{}}/>
                </View>
            </View>
        </View>
    )
};

const Styles =StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'   
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        elevation:5,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15 
    }
});
export default StartGameScreen;