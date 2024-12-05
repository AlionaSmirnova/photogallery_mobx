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
  ActivityIndicator
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
  const [page, setPage] = useState(1);
  const [photosArr, setPhotosArr] = useState([]);

  useEffect(() => {
    mainStore.getImages(page);
//  if(mainStore?.imageData) {
//   setTimeout(() => {
//     setPhotosArr(mainStore?.imageData);
//   }, 1200);

//  } 
 
  }, []);
  

  const goToNextPage = React.useCallback(() => {
  
const nextPage = +mainStore.imageData.page +1;
if (+mainStore.imageData.per_page < +nextPage) return;
mainStore.getImages(nextPage);

//  newData  =  mainStore.getImages(nextPage);попробовать пуш в массив
// console.log(newData, 'new DATA')


// setPhotosArr(prevData => ({...prevData, newData})); 
// setPhotosArr(prevData => console.log(prevData,'prev'));

  },[mainStore.imageData]);


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
      {/* {photosArr.length===0 ? ( */}
      {mainStore.loader ? (
      <ActivityIndicator size={'large'} />
      ) : ( 
        <> 
      <Text style={styles.welcomeText}>Welcome to the Photo Gallery! </Text>
      
      <FlatList
         data={mainStore?.imageData?.photos}
        // data={photosArr?.photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        onEndReached={goToNextPage}
      
        onEndReachedThreshold={0.1}
       
      />
      </>
      )}
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
