import React from 'react';
import { View, Text, StatusBar } from 'react-native'
import FastImage from 'react-native-fast-image'

export default function () {

    return (
        <View style={{ justifyContent: 'center', height: '100%', width: '100%', alignItems: 'center', backgroundColor: 'ghostwhite' }}>
            <StatusBar hidden />
            <FastImage
                style={{ width: '100%', height: '60%' }}
                source={require('../Animations/mascote.gif')}
                resizeMode={FastImage.resizeMode.contain} />
            <Text style={{ color: 'rgba(0, 0, 0, .55)', marginVertical: 25, fontSize: 30, textAlign: 'center', fontFamily: 'Baskervville-Regular' }}>
                Loading...
            </Text>
        </View>
    )
}