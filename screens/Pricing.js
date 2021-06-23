import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../App";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import {storageImageUrl} from "../screens/tools/Helpers";
import StarBar from "../screens/components/StarBar";
import FloatingButton from "../screens/components/FloatingButton";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import TabHeader from "../screens/components/TabHeader";

const DATA = [
    {id: '1', title: 'Camera 128 OX HD', titlePosition: 'right', image: 'https://www.canon.ie/media/eos_range_tcm24-1266213.png'},
    {id: '2', title: 'TriPod', titlePosition: 'right', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLXF2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1518560703577'},
    {id: '3', title: ' Sneaker White', titlePosition: 'right', image: 'https://5.imimg.com/data5/UU/BQ/MY-38527081/navizone0236_4-500x500.jpeg'},

];

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle9({navigation}) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <TabHeader titles={['ALL', 'POPULAR', 'NEW']} bgColor='#00AEAE' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                renderItem={({item}) => <CardItem data={item} navigation={navigation}snackbarRef={snackbarRef}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function CardItem({data, snackbarRef,navigation}) {
    let cardMargin = 5;
    let cardWidth = screenWidth - (cardMargin * 4);

    return (
        <View style={{
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <Image style={{height: 200, width: cardWidth}}
                   source={{uri:  data.image}}/>
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={{fontSize: 14, color: '#263238', marginBottom: 3}}>{data.title}</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Reviews')}><StarBar rating={4}/></TouchableOpacity>  
                </View>
                <Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid'
                    }}>$225</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ff9800'}}> $125</Text>
                </Text>
            </View>
            <FloatingButton onPress={() => navigation.navigate('AddCart')} style={{backgroundColor: '#B8A253', position: 'absolute', top: 10, right: 10}}
                            image={require('../assets/icon/ic_shoppig_cart.png')}
                            imageStyle={{width: 36, height: 36}}
                           />
            <FloatingButton style={{backgroundColor: 'white', position: 'absolute', top: 80, right: 10}}
                            image={require('../assets/icon/ic_love_white.png')}
                            imageStyle={{tintColor: '#B8A253', width: 20, height: 20}}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('button love clicked')}/>
        </View>
    )
}

export default EcommerceStyle9;