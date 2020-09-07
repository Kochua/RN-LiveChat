import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database'
import { forEach } from 'lodash'

import MessengerHeader from './_components/MessengerHeader'
import MessengerUserTicket from './_components/MessengerUserTicket'

interface UserType {
   nickname: string
   userName: string
}

interface RoomScreenProps {
   navigation: any
   route: any
}

function RoomScreen({ navigation, route }: RoomScreenProps) {
   const [users, setUsers] = React.useState([])
   const { nickname } = route.params

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

   return (
      <ScrollView style={styles.wrapper}>
         <MessengerHeader />

         {users.map((user: UserType) => {
            if (user.nickname === nickname) {
               //do not show myself
               return null
            } else {
               return (
                  <MessengerUserTicket
                     key={user.nickname}
                     currentUserNickname={nickname}
                     nickname={user.nickname}
                     navigation={navigation}
                     userName={user.userName}
                  />
               )
            }
         })}
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
