/* eslint-disable react/display-name */
import React from 'react'
import { Text, TouchableOpacity, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RoomScreen, ChatScreen, LoginScreen } from './screens'

const Stack = createStackNavigator()

function App() {
   const _onLogout = (navigation: any) => {
      Alert.alert(
         'Are you sure you want to leave?',
         '',
         [
            {
               text: 'Cancel',
               onPress: () => false,
               style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.goBack() },
         ],
         { cancelable: false }
      )
   }

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
               name="Login"
               options={() => ({
                  headerTitleStyle: { color: '#fff' },
                  headerStyle: { backgroundColor: '#8A2BE2' },
               })}
               component={LoginScreen}
            />

            <Stack.Screen
               name="Room"
               component={RoomScreen}
               options={({ navigation }) => ({
                  headerStyle: { backgroundColor: '#8A2BE2' },
                  headerTitleStyle: { color: '#fff' },
                  headerLeft: () => (
                     <TouchableOpacity onPress={() => _onLogout(navigation)}>
                        <Text
                           style={{
                              color: '#fff',
                              marginLeft: 15,
                              fontSize: 17,
                           }}
                        >
                           Logout
                        </Text>
                     </TouchableOpacity>
                  ),
               })}
            />
            <Stack.Screen
               name="Chat"
               component={ChatScreen}
               options={{
                  headerStyle: { backgroundColor: '#8A2BE2' },
                  headerShown: false,
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default App
