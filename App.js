import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TouchableOpacity,ScrollView } from 'react-native';
import MainButton from './screens/components/MainButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/pages/Signup';
import Login from './screens/pages/Login';
import Welcome from './screens/pages/Welcome';
import CartPage from './screens/pages/CartPage';
import Checkout from './screens/pages/Checkout';
import PaymentSuccess from './screens/pages/PaymentSuccess';
import NearByRestaurant from './screens/pages/NearByRestaurant';
import EnterPage from './screens/pages/EnterPage';
import MenuPage from './screens/pages/MenuPage';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="CartPage" component={CartPage}></Stack.Screen>
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="NearByRestaurant" component={NearByRestaurant} options={{ headerShown: false }} />
        <Stack.Screen name="EnterPage" component={EnterPage} options={{ headerShown: false }} />
        <Stack.Screen name="MenuPage" component={MenuPage} options={{ headerShown: false }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}