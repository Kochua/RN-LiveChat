import * as React from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'

interface ChatListItemProps {
   item: {
      userId: string
      text: string
   }
   currentUserNickname: string
}

const _getUserStyles = (isCurrentUser: boolean, animValue: any) => {
   const borderRadius = isCurrentUser
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

   const alignItems = isCurrentUser ? 'flex-end' : 'flex-start'
   const bgColor = isCurrentUser ? '#8A2BE2' : '#E6E6FA'
   const textColor = isCurrentUser ? '#fff' : '#000'

   const translateXAnim = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: isCurrentUser ? [60, 0] : [-60, 0],
      extrapolate: 'clamp',
   })

   const opacityAnimStyle = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
   })

   return {
      borderRadius,
      alignItems,
      bgColor,
      textColor,
      translateXAnim,
      opacityAnimStyle,
   }
}

const ChatListItem = ({ item, currentUserNickname }: ChatListItemProps) => {
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

   const _isCurrentUserStyles = _getUserStyles(isCurrentUser, animValue)

   return (
      <View
         style={[
            styles.wrapper,
            { alignItems: _isCurrentUserStyles.alignItems },
         ]}
      >
         <Animated.View
            style={[
               styles.message_container,
               _isCurrentUserStyles.borderRadius,
               {
                  backgroundColor: _isCurrentUserStyles.bgColor,
                  opacity: _isCurrentUserStyles.opacityAnimStyle,
                  transform: [
                     { translateX: _isCurrentUserStyles.translateXAnim },
                  ],
               },
            ]}
         >
            <Text style={{ color: _isCurrentUserStyles.textColor }}>
               {text}
            </Text>
         </Animated.View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: { flexGrow: 1, padding: 15, paddingTop: 8, paddingBottom: 0 },
   message_container: {
      maxWidth: '80%',

      paddingHorizontal: 15,
      paddingVertical: 13,
   },
})

export default React.memo(ChatListItem)
