import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import Semesters from './src/screens/Semesters'
import Profile from './src/screens/Profile'
import Course from './src/screens/Course'
import Faculty from './src/screens/Faculty'

const stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Semesters' component={Semesters} />
        <stack.Screen name='Profile' component={Profile} />
        <stack.Screen name='Course' component={Course} />
        <stack.Screen name='Faculty List' component={Faculty} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
