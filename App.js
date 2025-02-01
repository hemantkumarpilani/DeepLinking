import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();
const App = () => {
  // const linking = {
  //   prefixes: ['https://twitter-api-dashboard.vercel.app/app'],
  //   config: {
  //     screens: {
  //       Search: 'Search/:search',
  //     },
  //   },
  // };

  const linking = {
    // prefixes: ['app//', '192.168.110.45:3000'],
    prefixes: ['https://192.168.110.45:3000/app'],

    config: {
      screens: {
        Search: 'Search/:search',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
