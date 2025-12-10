import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import StartScreen from "./scr/screens/StartScreen";
import Level1 from "./scr/screens/Level1";
import Level2 from './scr/screens/Level2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
