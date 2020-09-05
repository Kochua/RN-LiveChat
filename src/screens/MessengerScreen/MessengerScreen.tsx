import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const MessengerUserTicket = ({
   navigation,
   userName = 'Irakli Kochua',
   lastMessage = 'I must tell you something about ur ',
   lastMessageTime = '3 min ago',
}) => {
   const userFirstLetter = userName.charAt(0)

   return (
      <TouchableOpacity
         onPress={() => navigation.navigate('Chat', { user: 'traki' })}
      >
         <View
            style={{
               height: 90,
               width: '100%',
               borderBottomColor: '#D3D3D3',
               borderBottomWidth: 0.4,
            }}
         >
            <View
               style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
               }}
            >
               <View style={{ paddingHorizontal: 15, paddingLeft: 20 }}>
                  <View
                     style={{
                        height: 54,
                        width: 54,
                        borderRadius: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#9370DB',
                     }}
                  >
                     <Text style={{ color: '#fff', fontSize: 18 }}>
                        {userFirstLetter}
                     </Text>
                  </View>
               </View>

               <View
                  style={{
                     height: '100%',
                     flexGrow: 1,
                     justifyContent: 'center',
                     flexShrink: 1,
                     paddingRight: 10,
                  }}
               >
                  <Text style={{ fontSize: 18, marginBottom: 3 }}>
                     {userName}
                  </Text>
                  <Text style={{ color: '#C0C0C0' }} numberOfLines={1}>
                     {lastMessage}
                  </Text>
               </View>

               <View
                  style={{
                     height: '100%',
                     width: 80,
                     justifyContent: 'center',
                  }}
               >
                  <Text style={{ color: '#808080' }}>{lastMessageTime}</Text>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}
const MemoizedMessengerUser = React.memo(MessengerUserTicket)

const MessengerHeader = () => {
   return (
      <View
         style={{
            width: '100%',
            borderBottomColor: '#D3D3D3',
            borderBottomWidth: 2,
            padding: 30,
            paddingLeft: 25,
         }}
      >
         <Text style={{ fontSize: 30 }}>Messages</Text>
         <Text style={{ marginTop: 5, color: '#A9A9A9' }}>
            You have 2 new messages
         </Text>
      </View>
   )
}

const MessengerScreen = ({ navigation }) => {
   return (
      <ScrollView style={styles.wrapper}>
         <MessengerHeader />
         <MemoizedMessengerUser navigation={navigation} />
         <MemoizedMessengerUser
            navigation={navigation}
            userName="Giorgi Maspindzelashvili"
         />
         <MemoizedMessengerUser
            navigation={navigation}
            userName="Bachana Abesadze"
            lastMessageTime="1 hour ago"
         />
         <MemoizedMessengerUser
            navigation={navigation}
            userName="Lasha Talaxadze"
            lastMessageTime="1 hour ago"
         />
         <MemoizedMessengerUser
            navigation={navigation}
            userName="Lionel Messi"
            lastMessageTime="2 hour ago"
         />
         <MemoizedMessengerUser
            navigation={navigation}
            userName="Zurab Japaridze"
            lastMessageTime="2 hour ago"
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

export default MessengerScreen
