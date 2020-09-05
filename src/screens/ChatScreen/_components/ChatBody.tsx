import * as React from 'react'
import {
   StyleSheet,
   View,
   Text,
   FlatList,
   Button,
   Dimensions,
   Animated,
   Easing,
} from 'react-native'

const HEIGHT = Dimensions.get('window').height

const ChatListItem = React.memo(({ item }) => {
   const { userId, text } = item
   const isCurrentUser = userId === '1'
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
           borderTopLeftRadius: 15,
           borderBottomLeftRadius: 15,
        }
      : {
           borderTopRightRadius: 15,
           borderBottomRightRadius: 15,
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
            paddingVertical: 4,
            alignItems: messageAlign,
         }}
      >
         <Animated.View
            style={[
               {
                  maxWidth: '80%',
                  backgroundColor: messamgeColor,
                  paddingHorizontal: 15,
                  paddingVertical: 18,
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

const ChatBody = ({ messages }) => {
   const _inputRef = React.useRef(null)
   React.useEffect(() => {}, [])

   return (
      <View style={styles.wrapper}>
         <FlatList
            data={messages}
            renderItem={({ item }) => <ChatListItem item={item} />}
            keyExtractor={(item) => item.id}
            scrollEnabled
            style={{ paddingBottom: 5 }}
            contentContainerStyle={{
               paddingTop: 7.5,
               paddingBottom: 7.5,
               justifyContent: 'flex-end',
            }}
            ref={_inputRef}
            onContentSizeChange={() => {
               _inputRef.current.scrollToEnd({ animated: true })
            }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1 },
})

export default ChatBody
