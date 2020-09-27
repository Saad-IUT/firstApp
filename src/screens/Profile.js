import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import ME from '../../assets/me.jpg'
import Layout from '../Layout'

const Profile = () => {
  return (
    <Layout>
      <Image style={styles.imageStyle} source={ME} />
      <View style={styles.text}>
        <Text style={styles.textStyle}>Name: Saad Bin Johir</Text>
        <Text style={styles.textStyle}>Student ID: 170042047</Text>
        <Text style={styles.textStyle}>Room no. 404, South</Text>
        <Text style={styles.textStyle}>Email: saadbinjohir@gmail.com</Text>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 200,
  },
  text: {
    marginTop: 40,
  },
  textStyle: {
    fontSize: 25,
    color: 'black',
    marginVertical: 15,
  },
})

export default Profile
