import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function Bottomnav () {
    const [tab, setTab] = useState('recent');
    const renderSeparator = () => {
        return (
            <View
                style={{
                    width: 10,
                }}
            />
        );
    };
    return (
            <View style={{height: 70, backgroundColor: '#00AEAE', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => setTab('recent')}
                                  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 25, height: 25, tintColor: tab === 'recent' ? '#FFF' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../assets/icon/clock.png')}/>
                    <Text style={{
                        color: tab === 'recent' ? '#FFF' : '#000000',
                        fontSize: 12,
                    }}>Recent</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('favorite')}
                                  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 25, height: 25, tintColor: tab === 'favorite' ? '#FFF' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../assets/icon/ic_love_white.png')}/>
                    <Text style={{
                        color: tab === 'favorite' ? '#FFF' : '#000000',
                        fontSize: 12,
                    }}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('nearby')}
                                  style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                    <Image style={{width: 25, height: 25, tintColor: tab === 'nearby' ? '#FFF' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../assets/icon/pin.png')}/>
                    <Text style={{
                        color: tab === 'nearby' ? '#FFF' : '#000000',
                        fontSize: 12,
                    }}>Nearby</Text>
                </TouchableOpacity>
            </View>
    );
}
