import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image, ImageBackground} from "react-native";
import MaterialButton from "../screens/components/MaterialButton";
import MaterialSnackbar from '../screens/components/MaterialSnackbar';
import {PageContext} from "../App";
import SwipeBackView from "../screens/components/SwipeBack";
import ViewPagerIndicator from "../screens/components/ViewPagerIndicator";
import {storageImageUrl} from "../screens/tools/Helpers";

const screenWidth = Dimensions.get('window').width;

function Onboarding({navigation}) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <ImageBackground source={{uri: storageImageUrl('walkthrough', 'walkthrough_14_960.jpg')}}
                         style={{flex: 1, alignItems: 'center', backgroundColor: '#263238'}}>
            <SwipeBackView style={{paddingTop: 50}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: 290}}>
                        <FlatList
                            ref={flatlistRef}
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) => <PageItem index={index}/>}
                            onViewableItemsChanged={onViewRef.current}
                            viewabilityConfig={viewConfigRef.current}
                        />
                    </View>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#ff5722'/>
                </View>
                <View style={{flexDirection: 'row', padding: 10, marginTop: 20}}>
                    <MaterialButton title='SIGN UP'
                                    style={{flex: 1, height: 44, backgroundColor: 'white', marginRight: 10}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                    <MaterialButton title='SIGN IN' style={{flex: 1, height: 44, backgroundColor: '#B8A253'}}
                                    buttonPress={() => navigation.navigate('Login')}/>
                </View>
                <MaterialSnackbar ref={snackbarRef}/>
            </SwipeBackView>
        </ImageBackground>
    );
}

function PageItem({index}) {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={require('../assets/splashlogo.png')}
                   style={{height: 200,marginTop:-20, width: 300, resizeMode: 'contain', marginVertical: 60}}/>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'white'}}>Welcome to Kaydestudio</Text>
            <Text
                style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30, marginBottom: 60}}>Making
                friends is easy as waving your
                hand back and forth in easy step.</Text>
        </View>
    );
}

export default Onboarding;