// Navigation 5

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="incidents"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="incidents"
        component={Incidents}
        options={{
          title: 'Incidents Screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ccc',
          },
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: 'Incidents Details',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ccc',
          },
        }}
        component={Detail}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes

// Navigation 4
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

// // Pages
// import Incidents from './pages/Incidents'
// import Detail from './pages/Detail'

// const Routes = createAppContainer(
//   createStackNavigator(
//     {
//       Incidents: {
//         screen: Incidents,
//       },
//       Detail: {
//         screen: Detail,
//       },
//     },
//     {
//       initialRouteName: 'Incidents',
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
