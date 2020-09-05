import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Avatar = () => {
   return <View style={styles.wrapper}></View>
}

const styles = StyleSheet.create({
   wrapper: {
      height: 54,
      width: 54,
      borderRadius: 27,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
   },
})

export default Avatar
