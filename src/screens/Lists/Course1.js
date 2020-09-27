import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Layout from '../../Layout'

const Course1 = () => {
  const courseList = [
    { name: 'HUM 4145', key: '1' },
    { name: 'HUM 4147', key: '2' },
    { name: 'MATH 4141', key: '3' },
    { name: 'Phy 4143', key: '4' },
    { name: 'CSE 4107', key: '5' },
    { name: 'SWE 4101', key: '6' },
  ]

  return (
    <Layout>
      <Text style={{ color: 'blue', fontSize: 35, marginBottom: 10 }}>
        First Semester
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

export default Course1
