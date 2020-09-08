import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface MessangerHeaderProps {
   numberOnline?: number
   userName: string
   nickname: string
}

const MessengerHeader = ({
   userName,
   nickname,
   numberOnline = 0,
}: MessangerHeaderProps) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{userName}</Text>
         <Text style={{ color: 'blue' }}>@{nickname}</Text>
         <Text style={styles.titleSecondary}>
            <Text style={styles.number_online}>{Math.abs(numberOnline)}</Text>{' '}
            members online
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      borderBottomColor: '#D3D3D3',
      borderBottomWidth: 2,
      padding: 30,
      paddingBottom: 10,
      paddingLeft: 25,
   },
   title: { fontSize: 30 },
   titleSecondary: {
      alignSelf: 'flex-end',
      marginTop: 10,
      color: '#A9A9A9',
      marginRight: -15,
   },
   number_online: {
      color: 'green',
   },
})

export default MessengerHeader
