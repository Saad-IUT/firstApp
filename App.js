import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import Semesters from './src/screens/Semesters'
import Profile from './src/screens/Profile'
import Course1 from './src/screens/Lists/Course1'
import Course2 from './src/screens/Lists/Course2'
import Course3 from './src/screens/Lists/Course3'
import Faculty from './src/screens/Lists/Faculty'

const stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='Semesters' component={Semesters} />
        <stack.Screen name='Profile' component={Profile} />
        <stack.Screen name='Course List 1' component={Course1} />
        <stack.Screen name='Course List 2' component={Course2} />
        <stack.Screen name='Course List 3' component={Course3} />
        <stack.Screen name='Faculty List' component={Faculty} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
