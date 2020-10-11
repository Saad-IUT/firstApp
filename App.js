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
        <stack.Screen
          name='Home'
          component={Home}
          options={{ headerTitleAlign: 'center' }}
        />
        <stack.Screen
          name='Semesters'
          component={Semesters}
          options={{ headerTitleAlign: 'center' }}
        />
        <stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerTitleAlign: 'center' }}
        />
        <stack.Screen
          name='Course'
          component={Course}
          options={{ headerTitleAlign: 'center' }}
        />
        <stack.Screen
          name='Faculty List'
          component={Faculty}
          options={{ headerTitleAlign: 'center' }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
