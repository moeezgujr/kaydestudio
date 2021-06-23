import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Button, Input } from '../components';
import { Block, Checkbox, Button as GaButton, theme } from 'galio-framework';
import DocumentPicker from 'react-native-document-picker';

// const WATER_IMAGE = require('./water.png')

// screens
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
import CustomDrawerContent from '.././navigation/Menu';
// header for screens
import { Header } from '../components';
import { nowTheme, tabs } from '../constants';
import Jobs from './Jobs';
import Example from './Chat';
import Thread from './socialmedia/Thread';
import Feed from './socialmedia/Feed';
import FindPeopleScreen from './socialmedia/Findpeople';

const { width } = Dimensions.get('screen');
// const Navigation=createBottomTabNavigator();
const Stack = createStackNavigator();
export default class Nav extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    return <AppContainer />;
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home
          name="Home"
          component={Home}
          options={{
            header: ({ navigation, scene }) => (
              <Header title="Home" navigation={navigation} scene={scene} />
            ),
            cardStyle: { backgroundColor: '#FFFFFF' },
          }}
        />
      </View>
    );
  }
}

class ExploreScreen extends React.Component {
  render() {
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     backgroundColor: '#d0d0d0',
      //   }}
      // >
      <Feed 
      />
      // </View>
    );
  }
}
class Ratings extends React.Component {
  uploadImage() {}
  selectFile() {}
  render() {
    return (
      <React.Fragment>
        <AirbnbRating />
        <Block style={{ marginLeft: 'auto', marginRight: 'auto' }} width={width * 0.8}>
          <Input
            placeholder="Message"
            style={styles.textArea}
            iconContent={<Icon size={16} color="#ADB5BD" style={styles.inputIcons} />}
          />
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={this.electFile}>
            <Text style={styles.buttonTextStyle}>Select File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={this.uploadImage}
          >
            <Text style={styles.buttonTextStyle}>Upload File</Text>
          </TouchableOpacity>
          <Button round style={styles.createButton}>
            <Text style={{ fontFamily: 'montserrat-bold', color: 'white' }} size={11} color="white">
              Submit
            </Text>
          </Button>
        </Block>
      </React.Fragment>
      // </View>
    );
  }
}

class NotificationsScreen extends React.Component {
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}
      >
        <Jobs />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FindPeopleScreen
      />
      //   </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
      },
    },
    Chat: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="comments" size={25} color={tintColor} />,
        // onPress:() => this.props.navigation.navigate('profile')
      },
    },
    Review: {
      screen: Ratings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="star" size={25} color={tintColor} />,
      },
    },
    Jobs: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="file" size={25} color={tintColor} />,
      },
    },
    People: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="file" size={25} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#CA9F53',
    },
  }
);
const styles = StyleSheet.create({
  createButton: {
    width: width * 0.7,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 180,
    backgroundColor: '#CA9F53',
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  textAreaContainer: {
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    maxWidth: '100%',
    margin: 'auto',
  },
});
const AppContainer = createAppContainer(bottomTabNavigator);
