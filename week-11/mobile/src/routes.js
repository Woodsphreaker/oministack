// Navigation 5

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Page2 from './pages/Page2'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ccc',
          },
        }}
      />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes

// Navigation 4
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

// // Pages
// import Home from './pages/Home'
// import Page2 from './pages/Page2'

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Home: {
//         screen: Home,
//       },
//       Page2: {
//         screen: Page2,
//       },
//     },
//     {
//       initialRouteName: 'Home',
//       defaultNavigationOptions: {
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#7159c1',
//         },
//         headerTintColor: '#fff',
//       },
//     }
//   )
// )

// export default Routes
