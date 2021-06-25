import React, { useContext, useRef } from 'react';
import { Alert, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { PageContext } from "../App";
import HeaderThreeButton from "../screens/components/HeaderThreeButton";
import MaterialButton from "../screens/components/MaterialButton";
import MaterialInput from "../screens/components/MaterialInput";
import { storageImageUrl } from "../screens/tools/Helpers";
import MaterialSnackbar from "../screens/components/MaterialSnackbar";
import MaterialCheckBox from "../screens/components/MaterialCheckBox";
import firebase from 'firebase';
import { Loader } from '../components/Loader';
import * as Facebook from 'expo-facebook';


let margin = 10;

function Login({ navigation }) {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const SignIn = () => {
        setLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoading(false);
                navigation.navigate("home");
                Alert.alert("Login Successfully");
            })
            .catch(error => {
                setLoading(false);
                Alert.alert(JSON.stringify(error.message))
            })
    }


    async function facebookLogin() {
        setLoading(true);
        try {
            await Facebook.initializeAsync({
                appId: '840013383533922',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                setLoading(false);
                navigation.navigate("home");
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            setLoading(false);
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <ImageBackground source={{ uri: storageImageUrl('signup_login', 'login_register_12_960.jpg') }}
            style={{ flex: 1, marginTop: 25, backgroundColor: 'gray' }}>
            <HeaderThreeButton
                title='Sign In'
                navPress={() => pageContext.pageDispatch({ page: 'pop' })}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, margin: margin, justifyContent: 'center' }}>
                    <View style={{ padding: margin, backgroundColor: 'white' }}>
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
                                style={{ height: 50, width: 50, resizeMode: 'contain' }} />
                        </View>
                        <MaterialInput bgColor='#f1f5f7' placeholder='Username' value={email} onChangeText={e => setEmail(e)} />
                        <MaterialInput bgColor='#f1f5f7' placeholder='Password' value={password} onChangeText={e => setPassword(e)}
                            isPassword={true} />
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: margin
                        }}>
                            <MaterialCheckBox title='Remember me' />
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => navigation.navigate('Forgotpassword')}>
                                <Text style={{ fontSize: 14, textAlign: 'center' }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {loading ? (
                        <MaterialButton title='Sign In' style={{ backgroundColor: '#B8A253', marginTop: 25 }}
                            buttonPress={() => SignIn()} />
                    ) : (<Loader />)}

                    <MaterialButton title='Sign In with Facebook' style={{ backgroundColor: '#3f569a', marginTop: margin }}
                        buttonPress={() => facebookLogin()} />

                </View>
                <MaterialButton title='Sign Up' style={{
                    marginHorizontal: margin,
                    marginBottom: margin,
                    backgroundColor: 'white'
                }}
                    buttonPress={() => navigation.navigate('Account')} />

            </View>
            <MaterialSnackbar ref={snackbarRef} />
        </ImageBackground>
    );
}

export default Login;