import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../App";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import MaterialButton from "../screens/components/MaterialButton";
import MaterialInput from "../screens/components/MaterialInput";
import {storageImageUrl} from "../screens/tools/Helpers";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import MaterialCheckBox from "../screens/components/MaterialCheckBox";

let margin = 10;

function Login({navigation}) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('signup_login', 'login_register_12_960.jpg')}}
                         style={{flex: 1,marginTop:25, backgroundColor: 'gray'}}>
            <HeaderThreeButton
                title='Sign In'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{flex: 1}}>
                <View style={{flex: 1, margin: margin, justifyContent: 'center'}}>
                    <View style={{padding: margin, backgroundColor: 'white'}}>
                        <View style={{
                            width: 86,
                            height: 86,
                            marginTop: -60,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                            borderRadius: 50,
                        }}>
                            <Image source={require('../assets/icon/ic_diamond.png')}
                                   style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                        </View>
                        <MaterialInput bgColor='#f1f5f7' placeholder='Username'/>
                        <MaterialInput bgColor='#f1f5f7' placeholder='Password'
                                       isPassword={true}/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: margin
                        }}>
                            <MaterialCheckBox title='Remember me'/>
                            <TouchableOpacity
                                style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                                onPress={() =>navigation.navigate('Forgotpassword')}>
                                <Text style={{fontSize: 14, textAlign: 'center'}}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <MaterialButton title='Sign In' style={{backgroundColor: '#B8A253', marginTop: 25}}
                                    buttonPress={() =>navigation.navigate('home')}/>
                    <MaterialButton title='Sign In with Facebook' style={{backgroundColor: '#3f569a', marginTop: margin}}
                                    buttonPress={() =>navigation.navigate('Account')}/>
                </View>
                <MaterialButton title='Sign Up' style={{
                    marginHorizontal: margin,
                    marginBottom: margin,
                    backgroundColor: 'white'
                }}
                buttonPress={() =>navigation.navigate('Account')}/>

            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

export default Login;