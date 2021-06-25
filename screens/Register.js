import React, { useContext, useRef } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { PageContext } from '../App';
import HeaderThreeButton from '../screens/components/HeaderThreeButton';
import MaterialButton from '../screens/components/MaterialButton';
import MaterialInput from '../screens/components/MaterialInput';
import { storageImageUrl } from '../screens/tools/Helpers';
import { Loader } from '../components/Loader';
import ModalDropdown from 'react-native-modal-dropdown';
import MaterialSnackbar from '../screens/components/MaterialSnackbar';
import firebase from 'firebase';

let data = [
  {
    value: 'Premium',
  },
  {
    value: 'Advanced',
  },
  {
    value: 'Free',
  },
];
function Register({ navigation }) {
  const pageContext = useContext(PageContext);
  const snackbarRef = useRef(null);
  const [fullName, setFullName] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [instaUrl, setIntaUrl] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')



  const [loading, setLoading] = React.useState(false)



  const regiterUser = async () => {
    setLoading(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        navigation.navigate("home");
        Alert.alert("User Created Successfully");
      })
      .catch((error) => {
        Alert.alert(JSON.stringify(error.message))
      });
  }


  return (
    <ImageBackground
      source={{ uri: storageImageUrl('signup_login', 'login_register_3_960.jpg') }}
      style={{ flex: 1, top: 20, marginBottom: 20, backgroundColor: 'black' }}
    >
      <HeaderThreeButton
        title="Sign Up"
        navPress={() => pageContext.pageDispatch({ page: 'pop' })}
        searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
        morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
      />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ marginHorizontal: 20 }}>
          <MaterialInput theme="dark" borderWidth={1} placeholder="Fullname" value={fullName} onChangeText={e => setFullName(e)} />
          <MaterialInput theme="dark" borderWidth={1} placeholder="Username" value={userName} onChangeText={e => setUserName(e)} />
          <MaterialInput theme="dark" borderWidth={1} placeholder="Email" type="email-address" value={email} onChangeText={e => setEmail(e)} />
          <ModalDropdown placeholder='Select Membership' defaultValue='Select Membership' textStyle={{ color: 'white', marginTop: 15, marginLeft: 10, fontSize: 15 }} dropdownStyle={{ width: '90%' }} style={{ borderWidth: 1, borderColor: 'white', height: 50, marginTop: 10 }} options={['Illustrator', 'Creator', 'Starter']} />

          <MaterialInput theme="dark" borderWidth={1} placeholder="Instagram URL" type="insta" value={instaUrl} onChangeText={e => setIntaUrl(e)} />
          <MaterialInput theme="dark" borderWidth={1} placeholder="Password" isPassword={true} value={password} onChangeText={e => setPassword(e)} />
          <MaterialInput
            theme="dark"
            borderWidth={1}
            placeholder="Confirm Password"
            isPassword={true}
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 44,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ fontSize: 14, textAlign: 'center' }}>
              <Text style={{ color: 'white' }}>Already have account?</Text>
              <Text style={{ fontWeight: 'bold', color: '#ff5722' }}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <MaterialButton
          title="Create An Account"
          style={{ height: 50, backgroundColor: '#B8A253' }}
          buttonPress={() => regiterUser()}
        />
      ) : (
        <Loader />
      )}
      <MaterialSnackbar ref={snackbarRef} />
    </ImageBackground>
  );
}

export default Register;
