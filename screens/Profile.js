import React, { useContext, useRef, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import { PageContext } from "../App";
import { storageImageUrl } from "../screens/tools/Helpers";
import MaterialButton from "../screens/components/MaterialButton";
import TabHeader from "../screens/components/TabHeader";
import Photos from './Photos';
import Friends from './Friends';
import About from '../screens/About';

function ProfileStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [bgHeight, seBgHeight] = useState(100);
    const [activeTab, setActiveTab] = useState(0);
    const onTabChanged = (index) => {
        setActiveTab(index)
    };

    return (
        <View style={{ flex: 1, marginTop: 100, backgroundColor: '#f1f5f7' }} onLayout={(event) => {
            let { x, y, width, height } = event.nativeEvent.layout;
            seBgHeight(height - 290)
        }}>
            <TabHeader titles={['PROFILE', 'PHOTOS', 'FRIENDS', 'ABOUT']} bgColor='#00AEAE' activeIndex={0}
                onActiveChanged={(i) => onTabChanged(i)} />
            {activeTab === 0 &&
                <React.Fragment>
                    <View style={{ flex: 1 }}>
                        <ImageBackground source={{ uri: storageImageUrl('profile', 'profile_10_background.jpg') }}
                            style={{
                                width: '100%',
                                height: bgHeight,
                                backgroundColor: 'gray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingBottom: 100,
                            }}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 50,
                                paddingHorizontal: 50,
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity style={{ padding: 20 }}>
                                    <Image source={require('../assets/icon/ic_email.png')}
                                        style={{ width: 22, height: 15, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                                <Image source={require('../assets/icon/ic_profile4.png')}
                                    style={{ width: 85, height: 85, resizeMode: 'contain' }} />
                                <TouchableOpacity style={{ padding: 20 }}>
                                    <Image source={require('../assets/icon/ic_setting_white.png')}
                                        style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, color: 'white', marginTop: 15 }}>Michael Angelo</Text>
                            <Text style={{ fontSize: 14, color: 'white', marginTop: 5 }}>Manhattan, NY</Text>
                        </ImageBackground>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        marginHorizontal: 10,
                        padding: 15,
                        elevation: 3,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#616161', marginBottom: 10 }}>ABOUT ME</Text>
                        <Text style={{ fontSize: 14, color: '#9e9e9e', lineHeight: 20 }}>Weasel maternal dove far the jeepers
                            goodness
                            inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
                        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/icon/ic_home_black.png')}
                                style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 13, color: '#616161', marginLeft: 8 }}>www.michaelangelo.com</Text>
                            <Image source={require('../assets/icon/ic_dribbble.png')}
                                style={{ width: 12, height: 12, marginLeft: 20, resizeMode: 'contain' }} />
                            <Text style={{ fontSize: 13, color: '#616161', marginLeft: 8 }}>michaelangelo</Text>
                        </View>
                    </View>
                    <MaterialButton title='Follow Me'
                        style={{ marginHorizontal: 15, marginVertical: 15, backgroundColor: '#B8A253' }}
                        buttonPress={() => snackbarRef.current.ShowSnackBarFunction('follow me clicked')} />
                    <MaterialSnackbar ref={snackbarRef} />
                </React.Fragment>}
            {activeTab === 1 &&
                <React.Fragment>
                    <Photos />
                </React.Fragment>
            }
   {activeTab === 2 &&
                <React.Fragment>
                    <Friends />
                </React.Fragment>
            }
              {activeTab === 3 &&
                <React.Fragment>
                    <About />
                </React.Fragment>
            }
        </View>
        

    );
}

function TabTitle({ title }) {
    return (
        <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'white' }}>{title}</Text>
        </View>
    );
}

export default ProfileStyle10;