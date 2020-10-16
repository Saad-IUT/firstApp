import React from 'react'
import { Text, View, useWindowDimensions, StyleSheet } from 'react-native'

const Orientation = () => {
  const { width, height } = useWindowDimensions()
  const isPotrait = height > width
  return (
    <View style={styles.container}>
      <Text
        style={[
          isPotrait ? styles.potraitStyle : styles.landscapeStyle,
          styles.textStyle,
        ]}
      >
        I am the Text
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  container: {
    margin: 40,
    alignItems: 'center',
  },
  potraitStyle: {
    margin: 40,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  landscapeStyle: {
    margin: 40,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
})

export default Orientation
