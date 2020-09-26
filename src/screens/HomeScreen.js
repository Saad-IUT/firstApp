import React from 'react'
import { Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import IUT from '../../assets/IUT.png'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.textStyle}>Hi there!</Text>
      <Button
        title='List'
        onPress={() => {
          navigation.navigate('List')
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('List')
        }}
      >
        <Image
          source={{
            height: 300,
            width: 300,
            uri: 'https://picsum.photos/300',
          }}
        />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'blue',
  },
})

export default HomeScreen
