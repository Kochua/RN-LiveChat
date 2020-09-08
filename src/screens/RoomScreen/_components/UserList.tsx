import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import UserListTicket from './UserListTicket'

interface UserType {
   nickname: string
   userName: string
}

interface UserListProps {
   users: []
   navigation: any
   currentUserNickname: string
}

const UserList = ({
   users,
   navigation,
   currentUserNickname,
}: UserListProps) => {
   if (users.length === 1) {
      return (
         <View style={styles.no_members_wrapper}>
            <Text style={styles.no_members_text}>Only you is online!</Text>
         </View>
      )
   }

   return users.map((user: UserType, i) => {
      if (user.nickname === currentUserNickname) {
         //do not show myself
         return <View key={i} />
      } else {
         return (
            <UserListTicket
               key={i}
               currentUserNickname={currentUserNickname}
               nickname={user.nickname}
               navigation={navigation}
               userName={user.userName}
            />
         )
      }
   })
}

const styles = StyleSheet.create({
   no_members_wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
   },
   no_members_text: {
      fontSize: 20,
      color: '#ccc',
   },
})

export default UserList
