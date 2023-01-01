import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import About from './pages/about';
import Home from './pages/home';
const Stack = createNativeStackNavigator()

const App = ()=> {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen // ABOUT
        name = "About"
        component = {About}
        options = {
          {headerShown:false}
        }
        />

        <Stack.Screen
        name = "Home"
        component = {Home}
        options = {
          {headerShown:false}
        }

        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
