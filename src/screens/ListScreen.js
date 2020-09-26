import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const uniList = [
    { name: 'BUET', key: '1' },
    { name: 'IUT', key: '2' },
    { name: 'DU', key: '3' },
    { name: 'RUET', key: '4' },
    { name: 'KUET', key: '5' },
    { name: 'CUET', key: '6' },
    { name: 'SUST', key: '7' },
    { name: 'BRAC', key: '8' },
    { name: 'NSU', key: '9' },
    { name: 'IUB', key: '10' },
  ]

  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={uniList}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>
        }}
      />
      {console.log('Great')}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'blue',
    marginVertical: 30,
  },
  viewStyle: {
    borderColor: 'red',
    borderWidth: 5,
  },
})

export default ListScreen
