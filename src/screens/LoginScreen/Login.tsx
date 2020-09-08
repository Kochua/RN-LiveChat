import * as React from 'react'
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   Alert,
   ActivityIndicator,
   TouchableOpacity,
} from 'react-native'
import database from '@react-native-firebase/database'
import { ScrollView } from 'react-native-gesture-handler'

const LoginScreen = ({ navigation }: any) => {
   const [loading, setLoading] = React.useState(false)
   const [nickname, setNickname] = React.useState('')
   const [fullName, setFullName] = React.useState('')

   const buttonDisabled = !nickname || !fullName

   const clearValues = () => {
      setNickname('')
      setFullName('')
   }

   const onButtonPress = () => {
      setLoading(true)
      database()
         .ref(`/users/${nickname}`)
         .set({
            nickname,
            userName: fullName,
            lastMessage: 'Hey lets start the conversation',
            lastMessageTime: new Date(),
         })
         .then(() => {
            navigation.navigate('Room', { nickname })
            clearValues()
            setLoading(false)
         })
         .catch((e) => {
            Alert.alert('error', e.error)
            clearValues()
            setLoading(false)
         })
   }

   return (
      <ScrollView style={styles.wrapper} contentContainerStyle={{ flex: 1 }}>
         <View style={styles.inner}>
            <Text style={styles.title}>
               Just sign up with unique nickname and start chating
            </Text>
            <View style={styles.input_container}>
               <TextInput
                  placeholder="@nickname"
                  value={nickname}
                  onChangeText={(text) => setNickname(text)}
               />
            </View>

            <View style={styles.input_container}>
               <TextInput
                  placeholder="display name"
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
               />
            </View>

            <TouchableOpacity
               onPress={onButtonPress}
               style={{ marginTop: 30 }}
               disabled={buttonDisabled}
            >
               {loading ? (
                  <ActivityIndicator />
               ) : (
                  <Text style={styles.button_text}>
                     Start the conversation{' '}
                  </Text>
               )}
            </TouchableOpacity>
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1, backgroundColor: '#fff' },
   inner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      marginTop: -50,
      marginBottom: 50,
      fontSize: 25,
      textAlign: 'center',
      paddingHorizontal: 7,
   },
   input_container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 6,
      borderWidth: 1,
      minWidth: 300,
      borderColor: '#8A2BE2',
      marginBottom: 10,
   },
   button_text: { fontSize: 17, color: '#007AFF' },
})

export default LoginScreen
