import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const Semesters = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title='1st'
          onPress={() => {
            navigation.navigate('Course List 1')
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='2nd'
          onPress={() => {
            navigation.navigate('Course List 2')
          }}
        />
      </View>
      <Button
        title='3rd'
        onPress={() => {
          navigation.navigate('Course List 3')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop: 100,
  },
  button: {
    marginBottom: 100,
  },
})

export default Semesters
