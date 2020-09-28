import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const courseList1 = [
  { name: 'HUM 4145', key: '1' },
  { name: 'HUM 4147', key: '2' },
  { name: 'MATH 4141', key: '3' },
  { name: 'Phy 4143', key: '4' },
  { name: 'CSE 4107', key: '5' },
  { name: 'SWE 4101', key: '6' },
]
const courseList2 = [
  { name: 'HUM 4247', key: '1' },
  { name: 'HUM 4249', key: '2' },
  { name: 'MATH 4241', key: '3' },
  { name: 'CSE 4203', key: '4' },
  { name: 'CSE 4205', key: '5' },
  { name: 'SWE 4201', key: '6' },
]
const courseList3 = [
  { name: 'MATH 4341', key: '1' },
  { name: 'CSE 4303', key: '2' },
  { name: 'CSE 4305', key: '3' },
  { name: 'CSE 4307', key: '4' },
  { name: 'CSE 4309', key: '5' },
  { name: 'SWE 4301', key: '6' },
]

const Semesters = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title='1st'
          onPress={() =>
            navigation.navigate('Course', {
              courseList: courseList1,
              semester: 'First',
            })
          }
        />
      </View>
      <View style={styles.button}>
        <Button
          title='2nd'
          onPress={() =>
            navigation.navigate('Course', {
              courseList: courseList2,
              semester: 'Second',
            })
          }
        />
      </View>
      <Button
        title='3rd'
        onPress={() =>
          navigation.navigate('Course', {
            courseList: courseList3,
            semester: 'Third',
          })
        }
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
