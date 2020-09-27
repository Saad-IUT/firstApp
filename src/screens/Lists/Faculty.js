import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Layout from '../../Layout'

const Faculty = () => {
  const facultyList = [
    { name: 'Mr Mohayeminul Islam', key: '1' },
    { name: 'Mrs Tajkia Rahman Toma', key: '2' },
    { name: 'Mr Sohel Ahmed', key: '3' },
    { name: 'Mr Tasnim Ahmed', key: '4' },
    { name: 'Mrs Lutfun Nahar Lota', key: '5' },
  ]

  return (
    <Layout>
      <FlatList
        data={facultyList}
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
    color: '#377dff',
    marginVertical: 20,
  },
})

export default Faculty
