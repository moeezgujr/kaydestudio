import React, { useContext, useRef, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { PageContext } from '../App';
import MaterialSnackbar from '../screens/components/MaterialSnackbar';
import { storageImageUrl } from '../screens/tools/Helpers';
import HeaderThreeButton from '../screens/components/HeaderThreeButton';
import TabHeader from '../screens/components/TabHeader';
import Bottomnav from './bottomnav';
import ChatUser from './ChatUser';
import Popular from './Popular';

const DATA = [
  {
    id: '1',
    user: 'Tony Ramirez',
    avatar: require('../assets/icon/ic_profile2.png'),
    image: 'activity_11_img.jpg',
    title: 'Shanghai City Landscape',
    text:
      'Weasel the jeeper goodness inconsiderately spelledso ubiquitous amused knitted and altruistic.',
    tags: '#shanghai #wow',
    datetime: 'An hour ago',
  },
  {
    id: '2',
    user: 'Nikita Woods',
    avatar: require('../assets/icon/ic_profile1.png'),
    image: 'activity_11_img.jpg',
    title: 'Today’s Post from Greenland!',
    text:
      'Weasel the jeeper goodness inconsiderately spelledso ubiquitous amused knitted and altruistic.',
    tags: '#shanghai #wow',
    datetime: 'An hour ago',
  },
  {
    id: '3',
    user: 'Nikita Woods',
    avatar: require('../assets/icon/ic_profile1.png'),
    image: 'activity_11_img.jpg',
    title: 'Today’s Post from Greenland!',
    text:
      'Weasel the jeeper goodness inconsiderately spelledso ubiquitous amused knitted and altruistic.',
    tags: '#shanghai #wow',
    datetime: 'An hour ago',
  },
];

function Home({ navigation }) {
  const pageContext = useContext(PageContext);
  const snackbarRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const onTabChanged = (index) => {
    setActiveTab(index)
  };
  return (

    <View style={{ flex: 1, backgroundColor: '#f1f5f7' }}>

      <TabHeader
        titles={['NEW', 'POPULAR', 'Messages']}
        bgColor="#00AEAE"
        activeIndex={0}
        onActiveChanged={(i) => onTabChanged(i)}
      />
      {activeTab === 0 &&
        <React.Fragment>
          <FlatList
            contentContainerStyle={{ paddingBottom: 10 }}
            data={DATA}
            renderItem={({ item }) => <ItemActivity navigation={navigation} data={item} />}
            keyExtractor={(item) => item.id}
          />
        </React.Fragment>
      }
      {activeTab === 2 &&
        <React.Fragment>
          <ChatUser navigation={navigation} />
        </React.Fragment>
      }
      {activeTab === 1 &&
        <React.Fragment>
          <Popular navigation={navigation} />
        </React.Fragment>
      }
      <Bottomnav />
      <MaterialSnackbar ref={snackbarRef} />
    </View>
  );
}

function ItemActivity({ data, navigation }) {
  return (
    <React.Fragment>
      <TouchableOpacity onPress={() => navigation.navigate('PopularDetails')}>
        <View>
          <Image
            source={{ uri: storageImageUrl('activity', data.image) }}
            style={{ height: 260, width: '100%', resizeMode: 'cover' }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: -20,
              paddingHorizontal: 25,
              alignItems: 'flex-end',
            }}
          >
            <Image source={data.avatar} style={{ height: 40, width: 40, resizeMode: 'cover' }} />
            <Text
              style={{
                flex: 1,
                fontSize: 14,
                marginLeft: 10,
                fontWeight: 'bold',
                color: '#263238',
              }}
            >
              {data.user}
            </Text>
            <Text style={{ fontSize: 12, color: '#263238' }}>{data.datetime}</Text>
          </View>
          <View style={{ padding: 25 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#263238' }}>{data.title}</Text>
            <Text style={{ fontSize: 14, marginTop: 5, color: '#757575' }}>{data.text}</Text>
            <Text style={{ color: '#2979ff' }}>{data.tags}</Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../assets/icon/ic_love_red.png')}
                  style={{ width: 10, height: 10, tintColor: 'gray', resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 12, marginLeft: 5, color: '#616161' }}>1347</Text>
                <Image
                  source={require('../assets/icon/ic_viewer_blue.png')}
                  style={{
                    width: 14,
                    height: 10,
                    tintColor: 'gray',
                    marginLeft: 25,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{ fontSize: 12, marginLeft: 5, color: '#616161' }}>19546</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}

export default Home;
