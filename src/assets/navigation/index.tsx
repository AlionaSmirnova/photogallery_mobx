import * as React from 'react';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import ImageScreen from '../components/ImageScreen/ImageScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type MainStackParamList = {
    Home: undefined;
    Image: {
      photoId?:number;
      photoPortrait?:string;
      photographer?:string;
    };
  };


const Stack = createNativeStackNavigator<MainStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home"   screenOptions={{headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name='Image' component={ImageScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}