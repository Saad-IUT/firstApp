import React from 'react'
import { StyleSheet, View } from 'react-native'

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    alignItems: 'center',
  },
})

export default Layout
