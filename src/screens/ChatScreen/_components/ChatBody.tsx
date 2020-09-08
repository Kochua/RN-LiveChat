import * as React from 'react'
import { StyleSheet, View, Text, FlatList, Animated } from 'react-native'

const ChatListItem = React.memo(({ item, currentUserNickname }) => {
   const { userId, text } = item
   const isCurrentUser = userId === currentUserNickname
   const animValue = React.useRef(new Animated.Value(0)).current

   React.useEffect(() => {
      Animated.timing(animValue, {
         toValue: 1,
         duration: 600,
         useNativeDriver: true,
      }).start()
   }, [])

   const messageBorderRadius = isCurrentUser
      ? {
           borderTopLeftRadius: 20,
           borderBottomLeftRadius: 20,
           borderTopRightRadius: 20,
        }
      : {
           borderTopRightRadius: 20,
           borderBottomRightRadius: 20,
           borderTopLeftRadius: 20,
        }
   const messageAlign = isCurrentUser ? 'flex-end' : 'flex-start'
   const messamgeColor = isCurrentUser ? '#8A2BE2' : '#E6E6FA'
   const messamgeTextolor = isCurrentUser ? '#fff' : '#000'

   const messageTranslateStyle = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: isCurrentUser ? [60, 0] : [-60, 0],
      extrapolate: 'clamp',
   })

   const messageOpacityAnimStyle = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
   })

   return (
      <View
         style={{
            flexGrow: 1,
            padding: 15,
            paddingTop: 8,
            paddingBottom: 0,
            alignItems: messageAlign,
         }}
      >
         <Animated.View
            style={[
               {
                  maxWidth: '80%',
                  backgroundColor: messamgeColor,
                  paddingHorizontal: 15,
                  paddingVertical: 13,
               },
               messageBorderRadius,
               {
                  opacity: messageOpacityAnimStyle,
                  transform: [{ translateX: messageTranslateStyle }],
               },
            ]}
         >
            <Text style={{ color: messamgeTextolor }}>{text}</Text>
         </Animated.View>
      </View>
   )
})

const ChatBody = ({ messages, currentUserNickname }) => {
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
            _inputRef.current.scrollToEnd({ animated: true })
         }}
      />
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1 },
})

export default ChatBody
