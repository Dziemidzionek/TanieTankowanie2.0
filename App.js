import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AuthChoiceScreen from './screens/AuthChoiceScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import StationScreen from './screens/StationScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreenNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Strona główna',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
          tabBarLabel: 'Mapa',
        }}
      />
      <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
            tabBarLabel: 'Ustawienia',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
              
            ),
          }}
        />
         <Tab.Screen
        name="Stacje"
        component={StationScreen}
        options={{
          headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
            tabBarLabel: 'Ustawienia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Stacje',
        }}
        />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthChoice"
          component={AuthChoiceScreen}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreenNavigator}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
            headerShown: true,
            
          }}
        />
        
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTransparent: true,
            title: '',
            headerBackTitleVisible: false,
            headerTintColor: '#f39c12',
          }}
        />
        <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerTransparent: true,
        title: '',
        headerBackTitleVisible: false,
        headerTintColor: '#f39c12',
      }}
    />
       <Stack.Screen
        name="StationScreen"
        component={StationScreen}
        options={{
          headerTransparent: true,
          title: 'Stacje',
          headerBackTitleVisible: false,
          headerTintColor: '#f39c12',
          headerShown: true,
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
