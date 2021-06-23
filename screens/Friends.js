import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../App";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import FloatingButton from "../screens/components/FloatingButton";
import TabHeader from "../screens/components/TabHeader";

const DATA = [
    {
        id: '1',
        name: 'Michelle Hendley',
        avatar: require('../assets/icon/ic_profile1.png'),
        address: 'San Fransisco, CA'
    },
    {
        id: '2',
        name: 'Kimberly White',
        avatar: require('../assets/icon/ic_profile2.png'),
        address: 'Manhattan, NY'
    },
    {
        id: '3',
        name: 'Steve Rogers',
        avatar: require('../assets/icon/ic_profile3.png'),
        address: 'Brooklyn, NY'},
    {
        id: '4',
        name: 'Amy Pattersson',
        avatar: require('../assets/icon/ic_profile1.png'),
        address: 'Little Indian, ABQ'
    },
    {
        id: '5',
        name: 'Hannah Paige',
        avatar: require('../assets/icon/ic_profile2.png'),
        address: 'San Fransisco, CA'
    },
    {
        id: '6',
        name: 'Michelle Hendley',
        avatar: require('../assets/icon/ic_profile1.png'),
        address: 'San Fransisco, CA'
    },
    {
        id: '7',
        name: 'Kimberly White',
        avatar: require('../assets/icon/ic_profile2.png'),
        address: 'Manhattan, NY'
    },
];

function Friends() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                padding: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={require('../assets/icon/ic_profile4.png')}
                       style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c', marginTop: 4}}>UI Designer</Text>
                </View>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item} snackbarRef={snackbarRef}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({image}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Image source={image}
                   style={{width: 24, height: 24, resizeMode: 'contain'}}/>
        </View>
    );
}

function ItemData({data, snackbarRef}) {
    return (
        <View style={{
            width: '100%',
            paddingVertical: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginBottom: 10,
            borderBottomColor: '#e4e4e4',
            borderBottomWidth: 1
        }}>
            <Image source={data.avatar}
                   style={{width: 47, height: 47, resizeMode: 'contain'}}/>
            <View style={{flex: 1, marginLeft: 20}}>
                <Text style={{fontSize: 17, color: '#616161'}}>{data.name}</Text>
                <Text style={{fontSize: 12, color: '#8c8c8c', marginTop: 4}}>{data.address}</Text>
            </View>
            <FloatingButton size={28} onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}
                            style={{backgroundColor: '#B8A253', position: 'relative'}}/>
        </View>

    );
}

export default Friends;