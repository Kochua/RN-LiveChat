import React from 'react'
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Button,
   TextInput,
   SafeAreaView,
   Platform,
   Dimensions,
   Keyboard,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
} from 'react-native'
import firestore from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database'

const { height, width } = Dimensions.get('window')

const CHAT_HEIGHT = height * 0.86
const INPUT_HEIGHT = height * 0.14

interface MsgRowProps {
   currentUser: string
   msg: { id: string; text: string }
}

const MsgRow = ({ currentUser, msg }: MsgRowProps) => {
   const { id, text } = msg
   const _alignMessage = currentUser == id ? 'flex-end' : 'baseline'

   return (
      <View
         style={{
            paddingVertical: 10,
            width: '100%',
            borderBottomWidth: 0.3,
            borderColor: '#ccc',
         }}
      >
         <View
            style={{
               borderRadius: 5,
               borderWidth: 0.5,
               padding: 5,
               paddingHorizontal: 10,
               alignItems: 'center',
               justifyContent: 'center',
               alignSelf: _alignMessage,
            }}
         >
            <Text>{text}</Text>
         </View>
      </View>
   )
}

const Chat = ({ messages }) => {
   const currentUserId = '1'

   return (
      <ScrollView
         contentContainerStyle={{ flex: 1 }}
         style={{ height: CHAT_HEIGHT, width: '100%' }}
      >
         {messages.map((mes, i) => {
            return <MsgRow key={i} currentUser={currentUserId} msg={mes} />
         })}
      </ScrollView>
   )
}

const MessageSender = ({ onSubmit }) => {
   const [text, setText] = React.useState('')

   const _onTextChange = (value: any) => {
      setText(value)
   }

   const _onEndEditing = () => {
      console.log('call back hi')
   }

   const _onSubmit = async () => {
      await onSubmit(text)
      setText('')
   }

   return (
      <>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
               <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  value={text}
                  onChange={_onTextChange}
                  // onEndEditing={_onEndEditing}
               />
               <TouchableWithoutFeedback
                  onPress={_onSubmit}
                  style={{ width: 70, backgroundColor: 'blue' }}
               />
            </View>
         </TouchableWithoutFeedback>
      </>
   )
}

function App() {
   const currentId = '1'
   const [loading, setLoading] = React.useState(false)
   const [messages, setMessages] = React.useState([
      {
         id: '2',
         text: 'Hello world',
      },
   ])

   const [firstInput, setFirstInput] = React.useState('')
   const [secondInput, setSecondInput] = React.useState('')

   React.useEffect(() => {
      const onChildAdd = database()
         .ref('/users/123')
         .on('value', (snapshot) => {
            console.log('User data: ', snapshot.val())
         })

      // Stop listening for updates when no longer required
      return () => database().ref('/users').off('value', onChildAdd)
   }, [])

   const _onMessageSent = (message) => {
      const updateMessages = [...messages, ...message]

      setMessages(updateMessages)
   }

   const _setFirstMessage = () => {
      const updatedMessage = [
         ...messages,
         {
            id: '1',
            text: firstInput,
         },
      ]
      setMessages(updatedMessage)
      setFirstInput('')
   }

   const _setSecondMessage = () => {
      const updatedMessage = [
         ...messages,
         {
            id: '2',
            text: secondInput,
         },
      ]
      setMessages(updatedMessage)
      setSecondInput('')
   }

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
         style={styles.container}
      >
         <View style={{ marginTop: 20 }} />
         <Chat messages={messages} />

         <View>
            <View
               style={{ flexDirection: 'row', height: 40, borderWidth: 0.6 }}
            >
               <TextInput
                  style={{ padding: 10, flexGrow: 1 }}
                  placeholder="First Chatter"
                  value={firstInput}
                  onChangeText={(text) => setFirstInput(text)}
               />
               <TouchableWithoutFeedback onPress={_setFirstMessage}>
                  <View
                     style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'red',
                        paddingHorizontal: 10,
                     }}
                  >
                     <Text style={{ color: '#fff' }}>Send</Text>
                  </View>
               </TouchableWithoutFeedback>
            </View>

            <View
               style={{ flexDirection: 'row', height: 40, borderWidth: 0.6 }}
            >
               <TextInput
                  style={{ padding: 10, flexGrow: 1 }}
                  placeholder="Second Chatter"
                  value={secondInput}
                  onChangeText={(text) => setSecondInput(text)}
               />
               <TouchableWithoutFeedback onPress={_setSecondMessage}>
                  <View
                     style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        paddingHorizontal: 10,
                     }}
                  >
                     <Text style={{ color: '#fff' }}>Send</Text>
                  </View>
               </TouchableWithoutFeedback>
            </View>
         </View>
         {/* <MessageSender onSubmit={_onMessageSent} /> */}
      </KeyboardAvoidingView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f0efeb',
   },
   inner: {
      width: '100%',
      flexDirection: 'row',
      height: 80,
      borderTopColor: '#ccc',
      borderTopWidth: 1,
      backgroundColor: '#fff',
   },
   header: {
      fontSize: 36,
      marginBottom: 48,
   },
   textInput: {
      flex: 1,
      height: 80,
      borderColor: '#000000',
      fontSize: 30,
   },
   btnContainer: {
      backgroundColor: 'white',
      marginTop: 12,
   },
})

export default App
