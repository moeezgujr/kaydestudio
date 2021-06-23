import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../App";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import {storageImageUrl} from "../screens/tools/Helpers";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import TabHeader from "../screens/components/TabHeader";

const DATA = [
    {
        id: '1',
        user: 'Christopher Nolan',
        image: 'data:image/jpeg;base64,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',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago',
        Price:'100$'
    },
    {
        id: '2',
        user: 'Nikita Woods',
        image: 'https://image.shutterstock.com/image-vector/vintage-green-purple-retro-photo-260nw-1079688068.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago',
        Price:'140$'

    },
    {
        id: '3',
        user: 'Madelaine',
        image: 'https://img.favpng.com/11/14/22/camera-drawing-photography-clip-art-png-favpng-D3VmAiLZUhmYGihdVXiRruhR9.jpg',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago',
        Price:'150$'

    },
    {
        id: '4',
        user: 'Jonas Bjerre',
        image: 'https://images.unsplash.com/photo-1541680670548-88e8cd23c0f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago',
        Price:'230$'

    },
];

function Gigs({navigation}) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
           
            <TabHeader titles={['Freelancers', 'Pro', 'Illustrators']} bgColor='#00AEAE' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity navigation={navigation}data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data,navigation}) {
    return (
        <TouchableOpacity  onPress={() => navigation.navigate('GigDetails')}>
        <View>
            <View style={{
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: 'white',
                flexDirection: 'row',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri:data.image}}
                       style={{height: 142, width: 136, resizeMode: 'cover'}}/>
                <View style={{flex: 1, padding: 15}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    <Text style={{fontSize: 14, color: '#616161', marginTop: 5, lineHeight: 20}}>{data.text}</Text>

                    <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>{data.Price}</Text>
                           
                            <Text style={{fontSize: 12, marginLeft: 30, color: '#616161'}}>1347</Text>
                            <Image source={require('../assets/icon/ic_love_red.png')}
                                   style={{width: 10, height: 10, marginLeft: 10,  resizeMode: 'contain'}}/>
                        </View>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

export default Gigs;