import React from 'react'
import {
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import IUT from '../../assets/IUT.png'
import Layout from '../Layout'

const Home = ({ navigation }) => {
  return (
    <Layout>
      <Image style={styles.imageStyle} source={IUT} />
      <View style={styles.mid}>
        <Text style={styles.textStyle}>Department of CSE</Text>
        <Text style={styles.textStyle}>Programme : SWE</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Text style={styles.profileStyle}>My Profile</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button
          title='Semester Wise Course List'
          onPress={() => {
            navigation.navigate('Semesters')
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='List of Faculty Members'
          onPress={() => {
            navigation.navigate('Faculty List')
          }}
        />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 200,
  },
  mid: {
    alignItems: 'center',
    margin: 20,
  },
  textStyle: {
    fontSize: 25,
    color: '#377dff',
  },
  profileStyle: {
    fontSize: 20,
    color: 'blue',
    backgroundColor: '#add8e6',
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  
  button: {
    marginVertical: 15,
  },
})

export default Home
