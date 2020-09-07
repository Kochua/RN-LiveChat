import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface MessangerHeaderProps {
   numberOnline?: number
}

const MessengerHeader = ({ numberOnline = 0 }: MessangerHeaderProps) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Chat Room</Text>
         <Text style={styles.titleSecondary}>
            <Text style={styles.number_online}>{numberOnline}</Text> members
            online
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
      paddingLeft: 25,
   },
   title: { fontSize: 30 },
   titleSecondary: {
      color: '#A9A9A9',
   },
   number_online: {
      color: 'green',
   },
})

export default MessengerHeader
