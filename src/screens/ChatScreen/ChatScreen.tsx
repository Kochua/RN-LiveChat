import * as React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { ChatHeader } from '../../components'
import ChatBody from './_components/ChatBody'

const ChatScreen = ({ route, navigation }) => {
   const params = route.params

   return (
      <SafeAreaView style={styles.wrapper}>
         <ChatHeader />
         <ChatBody />
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1, backgroundColor: '#fff' },
})

export default ChatScreen
