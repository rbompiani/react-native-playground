import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')}
                    //source={{ uri: "https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_full/mountains-hero.jpg?1345838509" }}
                    style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed
                    <Text style={styles.highlight}> {props.roundsNumber} </Text>
                    rounds to guess the number
                    <Text style={styles.highlight}> {props.userNumber} </Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>

        </View >
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        width: '80%',
        margin: 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;