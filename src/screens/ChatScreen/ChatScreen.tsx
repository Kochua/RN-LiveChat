import * as React from 'react'
import {
   StyleSheet,
   View,
   Text,
   SafeAreaView,
   KeyboardAvoidingView,
   Platform,
} from 'react-native'

import { ChatHeader } from '../../components'
import ChatBody from './_components/ChatBody'
import ChatTextInput from './_components/ChatTextInput'

const DATA = [
   { id: '1', userId: '1', text: 'traki' },
   { id: '2', userId: '2', text: 'Zdarova aba brat' },
   { id: '3', userId: '2', text: 'rogorxar?' },
   { id: '4', userId: '1', text: 'Kargad Shen?' },
   {
      id: '5',
      userId: '2',
      text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?',
   },
   { id: '6', userId: '1', text: 'traki' },
   { id: '7', userId: '2', text: 'Zdarova aba brat' },
   { id: '8', userId: '2', text: 'rogorxar?' },
   { id: '9', userId: '1', text: 'Kargad Shen?' },
   {
      id: '10',
      userId: '2',
      text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?',
   },
   { id: '11', userId: '1', text: 'traki' },
   { id: '12', userId: '2', text: 'Zdarova aba brat' },
   { id: '13', userId: '2', text: 'rogorxar?' },
   { id: '14', userId: '1', text: 'Kargad Shen?' },
   {
      id: '15',
      userId: '2',
      text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?',
   },
   { id: '16', userId: '1', text: 'traki' },
   { id: '17', userId: '2', text: 'Zdarova aba brat' },
   { id: '28', userId: '2', text: 'rogorxar?' },
   { id: '18', userId: '1', text: 'Kargad Shen?' },
   {
      id: '19',
      userId: '2',
      text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?',
   },
   { id: '20', userId: '1', text: 'traki' },
   { id: '21', userId: '2', text: 'Zdarova aba brat' },
   { id: '22', userId: '2', text: 'rogorxar?' },
   { id: '23', userId: '1', text: 'Kargad Shen?' },
   {
      id: '24',
      userId: '2',
      text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?',
   },
]

const ChatScreen = ({ route, navigation }) => {
   const [messages, setMessages] = React.useState(DATA.reverse())
   const params = route.params

   const onTextSendHandler = (text) => {
      const newMessage = {
         id: Math.floor(Math.random() * 1000000 + 1).toString(),
         text: text,
         userId: Math.floor(Math.random() * 2 + 1).toString(),
      }
      const upDatedMessages = [...messages, newMessage]

      setMessages(upDatedMessages)
   }

   return (
      <SafeAreaView style={styles.wrapper}>
         <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.wrapper}
         >
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatTextInput onTextSend={onTextSendHandler} />
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1, backgroundColor: '#fff' },
})

export default ChatScreen
