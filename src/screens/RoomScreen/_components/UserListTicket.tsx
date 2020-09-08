import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { BackArrowIcon } from '../../../assets/Icons'

interface UserListTicketProps {
   navigation: any
   nickname: string
   currentUserNickname: string
   userName: string
   lastMessage?: string
   lastMessageTime?: string
}

const UserListTicket = ({
   navigation,
   nickname,
   currentUserNickname,
   userName,
}: UserListTicketProps) => {
   const _userFirstLetter = userName.charAt(0)

   return (
      <TouchableOpacity
         onPress={() =>
            navigation.navigate('Chat', {
               userName,
               nickname,
               currentUserNickname,
            })
         }
      >
         <View style={styles.wrapper}>
            <View style={styles.inner}>
               <View style={styles.avatar_container}>
                  <View style={styles.avatar}>
                     <Text style={styles.avatar_text}>{_userFirstLetter}</Text>
                  </View>
               </View>

               <View style={styles.text_container}>
                  <Text style={styles.text_username_text}>{userName}</Text>
                  <Text style={styles.text_nickname_text} numberOfLines={1}>
                     @{nickname}
                  </Text>
               </View>

               <View style={styles.right_side_container}>
                  <View style={{ transform: [{ rotate: '180deg' }] }}>
                     <BackArrowIcon color="#ccc" />
                  </View>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      height: 90,
      width: '100%',
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 0.4,
   },
   inner: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   avatar_container: {
      paddingHorizontal: 15,
      paddingLeft: 20,
   },
   avatar: {
      height: 54,
      width: 54,
      borderRadius: 27,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9370DB',
   },
   avatar_text: {
      color: '#fff',
      fontSize: 18,
   },
   text_container: {
      height: '100%',
      flexGrow: 1,
      justifyContent: 'center',
      flexShrink: 1,
      paddingRight: 10,
   },
   text_username_text: {
      fontSize: 19,
      marginBottom: 3,
   },
   text_nickname_text: {
      color: 'blue',
   },
   right_side_container: {
      height: '100%',
      width: 80,
      justifyContent: 'center',
      marginRight: 30,
   },
})

export default React.memo(UserListTicket)
