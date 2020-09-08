import * as React from 'react'
import { StyleSheet, View, Text, TextInput, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ChatTextInputProps {
   onTextSend: (text: string) => any
}

const ChatTextInput = ({ onTextSend }: ChatTextInputProps) => {
   const [textInput, setTextInput] = React.useState('')

   React.useEffect(() => {
      Keyboard.addListener('keyboardDidShow', () => null)
      Keyboard.addListener('keyboardDidHide', () => null)

      // cleanup function
      return () => {
         Keyboard.removeListener('keyboardDidShow', () => null)
         Keyboard.removeListener('keyboardDidHide', () => null)
      }
   }, [])

   const onSendPressHandler = () => {
      if (!textInput) {
         return null
      }
      setTextInput('')
      onTextSend(textInput)
      Keyboard.dismiss()
   }

   return (
      <View style={styles.wrapper}>
         <View style={styles.inner}>
            <View style={styles.action_btn} />

            <View style={styles.input_container}>
               <TextInput
                  placeholder="Aa"
                  value={textInput}
                  onChangeText={(text) => setTextInput(text)}
                  onSubmitEditing={Keyboard.dismiss}
               />
            </View>

            <TouchableOpacity
               style={styles.btn_container}
               onPress={onSendPressHandler}
            >
               <Text>Send</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: { minHeight: 60, width: '100%', marginBottom: 20 },
   inner: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
   },
   action_btn: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: '#ccc',
   },
   input_container: {
      width: '70%',
      flexGrow: 1,
      backgroundColor: '#DCDCDC',
      height: 40,
      marginLeft: 10,
      justifyContent: 'center',
      borderRadius: 20,
      paddingLeft: 10,
   },
   btn_container: {
      marginLeft: 10,
      height: '100%',
      paddingHorizontal: 5,
      justifyContent: 'center',
   },
})

export default ChatTextInput
