import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Splash from '../screens/Splash';
import Home from '../screens/TabScreens/Home';
import { TabNavigation } from './TabNavigation';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (    
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SPLASH} screenOptions={{headerShown: false}}>
                <Stack.Screen name={Routes.SPLASH} component={Splash} />
                <Stack.Screen name={Routes.TAB} component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>  
    )
}    
export default RootStack    