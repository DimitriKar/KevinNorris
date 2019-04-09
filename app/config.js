import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './views/HomeScreen'
import CategoryScreen from "./views/CategoryScreen";

/**
 * Creates a stack navigator with screens
 *
 * @type {"react-navigation".NavigationContainer}
 */

const AppNavigator = createStackNavigator({
    Home : HomeScreen,
    Category : CategoryScreen
}, 
{
    initialRouteName: "Home",
    // headerMode : "none"
})

export const AppContainer = createAppContainer(AppNavigator);