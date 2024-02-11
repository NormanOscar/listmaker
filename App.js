import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import ListScreen from './app/screens/ListScreen';
import AddScreen from './app/screens/AddScreen';
import UserScreen from './app/screens/UserScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'tomato', // Customize this color as needed
    }}
    onPress={onPress}
    activeOpacity={1} // Disable opacity change on press
  >
    {children}
  </TouchableOpacity>
);

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Add'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'List') {
              iconName = focused ? 'list' : 'list-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Add') {
              return null; // Hide icon for Add screen
            } else if (route.name === 'User') {
              iconName = focused ? 'user' : 'user';
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          },
          headerShown: false,
          gestureEnabled: false,
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            paddingBottom: 5,
            fontSize: 10,
            display: 'none'
          },
          style: {
            height: 70,
            padding: 10,
          }
        }}
      >
        <Screen name='List' component={ListScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'list' : 'list-outline'} size={size} color={color} />
          ),
        }} />
        <Screen name='Add' component={AddScreen} options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <AntDesign name="plus" size={30} color="white" />
            </CustomTabBarButton>
          ),
        }} />
        <Screen name='User' component={UserScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name={focused ? 'user' : 'user'} size={size} color={color} />
          ),
        }} />
      </Navigator>
    </NavigationContainer >
  );
}