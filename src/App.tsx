import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RoomScreen, ChatScreen, LoginScreen } from './screens'

function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         {/* <Text>Home Screen</Text> */}
         <Button
            title="Go to Messenger"
            onPress={() => navigation.navigate('Login')}
         />
      </View>
   )
}

const Stack = createStackNavigator()

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
               name="Room"
               component={RoomScreen}
               options={{ headerStyle: { backgroundColor: '#8A2BE2' } }}
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

const styles = StyleSheet.create({
   wrapper: { flex: 1 },
})

export default App
