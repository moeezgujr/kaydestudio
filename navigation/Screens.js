import React from 'react';
import { Block } from 'galio-framework';
import { Easing, Animated, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nav from '../screens/NavBottom';
import PostScreen from '../screens/socialmedia/PostScreen'
import Thread from '../screens/socialmedia/Thread'
import JobView from '../screens/ViewJob';
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Contact from '../screens/Contact';
import Pricing from '../screens/Pricing';

import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';
import SettingsScreen from '../screens/Settings';
// drawer
import CustomDrawerContent from './Menu';
// header for screens
import { Header, Icon } from '../components';
import { nowTheme, tabs } from '../constants';
import PostDetails from '../screens/PostDetails';
import NavDrawer from '../screens/NavDrawer';
import DummyPage from '../screens/components/DummyPage';
import AddCart from '../screens/AddCart';
import Reviews from '../screens/Reviews';
import Chat from '../screens/Chat';
import ChatUser from '../screens/ChatUser';
import Message from '../screens/Message';
import PopularDetails from '../screens/PopularDetails';
import Payment from '../screens/Payment';
import Gallery from '../screens/Gallery';
import Gigs from '../screens/Gigs';
import GigDetail from '../screens/GigDetail';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ComponentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Components" mode="card" headerMode="screen">
      <Stack.Screen
        name="Components"
        component={Components}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Components" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Articles" mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
      <Stack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Create Account" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function ContactStack(props) {
  return (
    <Stack.Navigator initialRouteName="Contact" mode="card" headerMode="screen">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Contact" navigation={navigation} scene={scene} />
          ),
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function GalleryStack(props) {
  return (
    <Stack.Navigator initialRouteName="Gallery" mode="card" headerMode="screen">
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Gallery" navigation={navigation} scene={scene} />
          ),
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function PricingStack(props) {
  return (
    <Stack.Navigator initialRouteName="Pricing" mode="card" headerMode="screen">
      <Stack.Screen
        name="Pricing"
        component={Pricing}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Pricing" search navigation={navigation} scene={scene} />
          ),
        }}
      />
      <Stack.Screen name="AddCart" component={AddCart} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="Payment" component={Payment} />


    </Stack.Navigator>
  );
}
function GigStack(props) {
  return (
    <Stack.Navigator initialRouteName="Gigs" mode="card" headerMode="screen">
      <Stack.Screen
        name="Gigs"
        component={Gigs}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Gigs" search navigation={navigation} scene={scene} />
          ),
        }}
      />
      <Stack.Screen name="GigDetails" component={GigDetail} />

    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Profile" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function SettingStack(props) {
  return (
    <Stack.Navigator initialRouteName="Settings" mode="card" headerMode="screen">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" search navigation={navigation} scene={scene} />
          ),
          // cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
function LoginStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Account" component={Register} />
    </Stack.Navigator>
  );
}
function JobViewStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="JobView"
        component={JobView}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Job Form" search options navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
    </Stack.Navigator>
  );
}
function PostDetailsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Post Details"
        component={PostDetails}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Post Details" options navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
    </Stack.Navigator>
  );
}
function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Home" search options navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="ThreadMsg" component={PostScreen} />
      <Stack.Screen name="Details" component={PostDetails} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="PopularDetails" component={PopularDetails} />
      <Stack.Screen name="ChatUser" component={ChatUser} />



    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.PRIMARY,
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="KaydeStore" component={PricingStack} />
      <Drawer.Screen name="Gallery" component={GalleryStack} />
      <Drawer.Screen name="Gigs" component={GigStack} />
      <Drawer.Screen name="Contact Us" component={ContactStack} />
      {/* <Drawer.Screen name="Components" component={ComponentsStack} /> */}
      {/* <Drawer.Screen name="Articles" component={ArticlesStack} /> */}
      <Drawer.Screen name="Account" component={AccountStack} />
      <Drawer.Screen name="Settings" component={SettingStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      {/* <Stack.Screen name="App" component={AppStack} /> */}
      <Stack.Screen name="Login" component={LoginStack} />
      <Stack.Screen name="JobView" component={JobViewStack} />
      <Stack.Screen name="home" component={AppStack} />


    </Stack.Navigator>
  );
}
