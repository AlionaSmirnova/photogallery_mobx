import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {observer} from 'mobx-react';
import {RouteProp, useRoute} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/index';
import styles from './styles';
import {Dimensions} from 'react-native';

type ImageScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Image'
>;

type PropTypes = {
  navigation: ImageScreenNavigationProp;
};

const ImageScreen: React.FC<PropTypes> = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const route = useRoute<RouteProp<MainStackParamList, 'Image'>>();

  return (
    <SafeAreaView style={styles.layout}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={styles.scrollStyles}
        automaticallyAdjustsScrollIndicatorInsets>
        <Text style={styles.text}>
          Photo by {route.params && route.params.photographer}
        </Text>
        <View>
          <Image
            source={{uri: route.params.photoPortrait}}
            style={{
              width: windowWidth,
              height: windowHeight,
              resizeMode: 'contain',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default observer(ImageScreen);
