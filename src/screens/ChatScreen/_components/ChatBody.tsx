import * as React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

const DATA = [
   { userId: '1', text: 'traki' },
   { userId: '2', text: 'Zdarova aba brat' },
   { userId: '2', text: 'rogorxar?' },
   { userId: '1', text: 'Kargad Shen?' },
   { userId: '2', text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?' },
   { userId: '1', text: 'traki' },
   { userId: '2', text: 'Zdarova aba brat' },
   { userId: '2', text: 'rogorxar?' },
   { userId: '1', text: 'Kargad Shen?' },
   { userId: '2', text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?' },
   { userId: '1', text: 'traki' },
   { userId: '2', text: 'Zdarova aba brat' },
   { userId: '2', text: 'rogorxar?' },
   { userId: '1', text: 'Kargad Shen?' },
   { userId: '2', text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?' },
   { userId: '1', text: 'traki' },
   { userId: '2', text: 'Zdarova aba brat' },
   { userId: '2', text: 'rogorxar?' },
   { userId: '1', text: 'Kargad Shen?' },
   { userId: '2', text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?' },
   { userId: '1', text: 'traki' },
   { userId: '2', text: 'Zdarova aba brat' },
   { userId: '2', text: 'rogorxar?' },
   { userId: '1', text: 'Kargad Shen?' },
   { userId: '2', text: 'Ravi aramiShavs shen ras schrebi ras saqmianob?' },
]

const ChatListItem = ({ item }) => {
   const { userId, text } = item
   const isCurrentUser = userId === '1'

   const messageBorderRadius = isCurrentUser
      ? {
           borderTopLeftRadius: 15,
           borderBottomLeftRadius: 15,
        }
      : {
           borderTopRightRadius: 15,
           borderBottomRightRadius: 15,
        }
   const messageAlign = isCurrentUser ? 'flex-end' : 'flex-start'
   const messamgeColor = isCurrentUser ? '#8A2BE2' : '#E6E6FA'
   const messamgeTextolor = isCurrentUser ? '#fff' : '#000'

   return (
      <View
         style={{
            flexGrow: 1,
            padding: 15,
            paddingVertical: 4,
            alignItems: messageAlign,
         }}
      >
         <View
            style={[
               {
                  maxWidth: '80%',
                  backgroundColor: messamgeColor,
                  paddingHorizontal: 15,
                  paddingVertical: 18,
               },
               messageBorderRadius,
            ]}
         >
            <Text style={{ color: messamgeTextolor }}>{text}</Text>
         </View>
      </View>
   )
}

const ChatBody = () => {
   return (
      <View style={styles.wrapper}>
         <FlatList
            data={DATA.reverse()}
            renderItem={ChatListItem}
            keyExtractor={(item) => item.id}
            scrollEnabled
            contentContainerStyle={{
               paddingTop: 7.5,
               justifyContent: 'flex-end',
            }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: { flex: 1 },
})

export default ChatBody
