import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../App";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import StaggeredView from "../screens/components/StaggeredView";
import MaterialInput from "../screens/components/MaterialInput";
import { TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: '1',
        user: 'Christina',
        avatar: require('../assets/icon/ic_profile1.png'),
        text: 'Weasel the jeeper goodness inconsiderate spelled so ubiquitous amused knitted and altruistic amiable...',
        datetime: '17.53',
        isChecked: true
    },
    {
        id: '2',
        user: 'Remi Boucher',
        avatar: require('../assets/icon/ic_profile1.png'),
        text: 'I work as a freelance customer support executive and this post is as genuine ..!',
        datetime: '17.53',
        isChecked: false
    },
    {
        id: '3',
        user: 'Steve Rogers',
        avatar: require('../assets/icon/ic_profile1.png'),
        text: 'Hi there! I am sorry I can’t go there right now, I have another appoinment.',
        datetime: '10.17',
        isChecked: false
    },
    {
        id: '4',
        user: 'Ludwig Beethov',
        avatar: require('../assets/icon/ic_profile1.png'),
        text: 'Do you need time to use the application or not?  sales conversation with an inexperienced freelancer and a ... On the contrary, If a paying client wants to chat at a specific time,y',
        datetime: 'yesterday',
        isChecked: false
    },
    {
        id: '5',
        user: 'Madelaine',
        avatar: require('../assets/icon/ic_profile1.png'),
        text: 'I was looking forward to build a website for my company ',
        datetime: 'yesterday',
        isChecked: false
    },

];

function ChatUser({navigation}) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{paddingVertical: 10, backgroundColor: '#f1f5f7'}}>
                {/* <View style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    paddingRight: 15,
                }}>
                    <MaterialInput bgColor='transparent' margin={0} placeholder='Search'/>
                    <Image source={require('../assets/icon/ic_search_gray.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </View> */}
            </View>
            <StaggeredView
                containerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered navigation={navigation} data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1,navigation}) {
    const wImage = (screenWidth / numColumns) - 15;
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <View style={{
                width: wImage,
                justifyContent: 'space-between',
                padding: 10,
                margin: 5,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={data.avatar}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 14, color: '#616161', fontWeight: 'bold'}}>{data.user}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 12, color: '#bdbdbd', marginRight: 10}}>{data.datetime}</Text>
                            <Image source={require('../assets/icon/ic_check.png')}
                                   style={{height: 16, width: 12, tintColor: data.isChecked ? '#e0e0e0' : '#0091ea', resizeMode: 'contain'}}/>
                        </View>
                    </View>
                </View>
                <Text style={{fontSize: 14, color: '#616161'}}>{data.text}</Text>
            </View></TouchableOpacity>
        </View>
    );
}

export default ChatUser;