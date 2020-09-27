import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Layout from '../../Layout'

const Course2 = () => {
  const courseList = [
    { name: 'HUM 4247', key: '1' },
    { name: 'HUM 4249', key: '2' },
    { name: 'MATH 4241', key: '3' },
    { name: 'CSE 4203', key: '4' },
    { name: 'CSE 4205', key: '5' },
    { name: 'SWE 4201', key: '6' },
  ]

  return (
    <Layout>
      <Text style={{ color: 'blue', fontSize: 35, marginBottom: 10 }}>
        Second Semester
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

export default Course2
