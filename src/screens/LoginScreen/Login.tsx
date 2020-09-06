import * as React from 'react'
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database'

const LoginScreen = ({ navigation }) => {
   const [loading, setLoading] = React.useState(false)
   const [nickname, setNickname] = React.useState('')
   const [fullName, setFullName] = React.useState('')

   const buttonDisabled = !nickname || !fullName

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
         })
         .catch((e) => {
            Alert.alert('error', e.error)
         })
   }

   return (
      <View style={styles.wrapper}>
         <View style={styles.inner}>
            <View
               style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 6,
                  borderWidth: 1,
                  minWidth: 250,
                  borderColor: '#8A2BE2',
                  marginBottom: 10,
               }}
            >
               <TextInput
                  placeholder="nickname"
                  value={nickname}
                  onChangeText={(text) => setNickname(text)}
               />
            </View>
            <View
               style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 6,
                  borderWidth: 1,
                  minWidth: 250,
                  borderColor: '#8A2BE2',
               }}
            >
               <TextInput
                  placeholder="full name"
                  value={fullName}
                  onChangeText={(text) => setFullName(text)}
               />
            </View>

            <TouchableOpacity
               onPress={onButtonPress}
               style={{ marginTop: 30 }}
               disabled={buttonDisabled}
            >
               <Text style={{ fontSize: 17 }}>Start the conversation </Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1, backgroundColor: '#fff' },
   inner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
})

export default LoginScreen
