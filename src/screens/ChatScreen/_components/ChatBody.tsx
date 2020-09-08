import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Animated } from 'react-native'

import ChatListItem from './ChatListItem'

interface ChatBodyProps {
   messages: []
   currentUserNickname: string
}

const ChatBody = ({ messages, currentUserNickname }: ChatBodyProps) => {
   const _inputRef = React.useRef(null)

   return (
      <FlatList
         data={messages}
         renderItem={({ item }) => (
            <ChatListItem
               item={item}
               currentUserNickname={currentUserNickname}
            />
         )}
         keyExtractor={(item) => item.id}
         scrollEnabled
         style={{ paddingBottom: 15, flex: 1 }}
         contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 7.5,
            justifyContent: 'flex-end',
         }}
         ref={_inputRef}
         onContentSizeChange={() => {
            _inputRef.current.scrollToEnd({ animated: false })
         }}
      />
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1 },
})

export default ChatBody
