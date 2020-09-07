import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Avatar from '../Avatar'
import { BackArrowIcon } from '../../assets/Icons'

const ChatHeader = ({
   navigation,
   userImg = '',
   userName = 'Irakli Kochua',
}) => {
   return (
      <View style={styles.wrapper}>
         <View style={styles.inner}>
            <TouchableOpacity
               onPress={() => navigation.goBack()}
               style={{ paddingHorizontal: 15 }}
            >
               <BackArrowIcon width={12} height={16} />
            </TouchableOpacity>
            <Avatar />
            <View style={{ paddingLeft: 20 }}>
               <Text style={{ fontSize: 25, color: '#000' }}>{userName}</Text>
               <Text style={{ color: '#32CD32' }}>Online</Text>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      height: 100,
      backgroundColor: '#D3D3D3',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
   },
   inner: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },
})

export default ChatHeader
