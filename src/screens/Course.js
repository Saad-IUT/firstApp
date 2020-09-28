import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Layout from '../Layout'

const Course = props => {
  const { courseList, semester } = props.route.params
  return (
    <Layout>
      <Text style={{ color: 'blue', fontSize: 35, marginBottom: 10 }}>
        {`${semester} Semester`}
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

export default Course
