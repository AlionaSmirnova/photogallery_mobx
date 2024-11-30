import React, {useState, useCallback, useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  useColorScheme,
  View,
  FlatList,
  Pressable,
} from 'react-native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainStackParamList} from '../../navigation/index';
import {observer} from 'mobx-react';
import {useRootStore} from '../../../core/hooks/useRootStore';
import styles from './styles';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'Home'
>;

type PropTypes = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<PropTypes> = ({navigation}: PropTypes) => {
  const {mainStore} = useRootStore();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    mainStore.getImages();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.list}>
        <Pressable
          style={styles.imgBlock}
          onPress={() =>
            navigation.navigate('Image', {
              photoId: item?.id,
              photoPortrait: item?.src?.portrait,
              photographer: item?.photographer,
            })
          }>
          <Image src={item?.src?.original} style={{width: 124, height: 130}} />
          <Text style={styles.photographer}>{item?.photographer}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.layout}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.welcomeText}>Welcome to the Photo Gallery! </Text>
      <FlatList
        data={mainStore?.imageData?.photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
