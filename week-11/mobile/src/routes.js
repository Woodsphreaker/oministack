import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Pages
import Home from './pages/Home'
import Page2 from './pages/Page2'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
      },
      Page2: {
        screen: Page2,
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
)

export default Routes
