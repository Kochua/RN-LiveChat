import * as React from 'react'
import {
   StyleSheet,
   SafeAreaView,
   KeyboardAvoidingView,
   Platform,
   Alert,
} from 'react-native'
import { forEach, orderBy } from 'lodash'
import database from '@react-native-firebase/database'

import { ChatHeader } from '../../components'
import ChatBody from './_components/ChatBody'
import ChatTextInput from './_components/ChatTextInput'

interface ChatScreenProps {
   route: any
   navigation: any
}

const ChatScreen = ({ route, navigation }: ChatScreenProps) => {
   const [messages, setMessages] = React.useState([])
   const { userName, nickname, currentUserNickname } = route.params
   const [lastMessageId, setLastMessageId] = React.useState(1)

   const chatLinkKey =
      currentUserNickname > nickname
         ? `${currentUserNickname}_${nickname}`
         : `${nickname}_${currentUserNickname}`

   React.useEffect(() => {
      const onChildAdd = database()
         .ref(`/messages/${chatLinkKey}`)
         .on('value', (snapshot: any) => {
            const messagesDb = snapshot.val()
            const _messages = []
            forEach(messagesDb, (message) => {
               _messages.push(message)
            })

            const orderedMessages = orderBy(
               _messages,
               ['lastMessageKey'],
               ['desc']
            )
            if (orderedMessages[0]) {
               const lastMessage = orderedMessages[0]
               setLastMessageId(lastMessage.lastMessageKey + 1)
            }
            const reversedMessages = orderedMessages.reverse()
            setMessages(reversedMessages)
         })

      // Stop listening for updates when no longer required
      return () => {
         database().ref(`/messages/${chatLinkKey}`).off('value', onChildAdd)
      }
   }, [])

   const onTextSendHandler = (text: string) => {
      const newMessage = {
         id: Math.floor(Math.random() * 1000000 + 1).toString(),
         text: text,
         userId: currentUserNickname,
         lastMessageKey: lastMessageId,
      }

      const newReference = database().ref(`/messages/${chatLinkKey}`).push()
      newReference
         .set(newMessage)
         .then(() => {
            console.log('DATA SET')
         })
         .catch((e) => {
            Alert.alert('error', e.error)
         })
   }

   return (
      <SafeAreaView style={styles.wrapper}>
         <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.wrapper}
         >
            <ChatHeader navigation={navigation} userName={userName} />
            <ChatBody
               messages={messages}
               currentUserNickname={currentUserNickname}
            />
            <ChatTextInput onTextSend={onTextSendHandler} />
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1, backgroundColor: '#fff' },
})

export default ChatScreen
