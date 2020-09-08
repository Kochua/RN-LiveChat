import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database'
import { forEach } from 'lodash'

import MessengerHeader from './_components/MessengerHeader'
import UserList from './_components/UserList'

interface RoomScreenProps {
   navigation: any
   route: any
}

interface UserType {
   nickname: string
   userName: string
}

function RoomScreen({ navigation, route }: RoomScreenProps) {
   const [users, setUsers] = React.useState([])
   const { nickname, userName } = route.params
   const numberOnline = users.length - 1

   React.useEffect(() => {
      const onChildAdd = database()
         .ref('/users')
         .on('value', (snapshot: any) => {
            const usersDB = snapshot.val()
            const _users = []

            forEach(usersDB, (user: UserType) => {
               _users.push(user)
            })
            setUsers(_users)
         })

      // Stop listening for updates when no longer required
      return () => {
         database().ref('/users').off('value', onChildAdd)
         database().ref(`/users/${nickname}`).remove()
      }
   }, [])

   console.log('zzdzd', userName)

   return (
      <ScrollView style={styles.wrapper}>
         <MessengerHeader
            userName={userName}
            nickname={nickname}
            numberOnline={numberOnline}
         />
         <UserList
            users={users}
            navigation={navigation}
            currentUserNickname={nickname}
         />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: '#fff',
   },
})

export default RoomScreen
