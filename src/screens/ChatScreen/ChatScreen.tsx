import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ChatScreen = ({ route, navigation }) => {
   const params = route.params

   return (
      <View style={styles.wrapper}>
         <Text>Chati zd</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {},
})

export default ChatScreen
