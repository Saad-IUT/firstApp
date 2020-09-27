import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Layout from '../../Layout'

const Course3 = () => {
  const courseList = [
    { name: 'MATH 4341', key: '1' },
    { name: 'CSE 4303', key: '2' },
    { name: 'CSE 4305', key: '3' },
    { name: 'CSE 4307', key: '4' },
    { name: 'CSE 4309', key: '5' },
    { name: 'SWE 4301', key: '6' },
  ]

  return (
    <Layout>
      <Text style={{ color: 'blue', fontSize: 35, marginBottom: 10 }}>
        Third Semester
      </Text>
      <FlatList
        data={courseList}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>{`${item.key}.  ${item.name}`}</Text>
          )
        }}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'black',
    marginVertical: 20,
  },
})

export default Course3
