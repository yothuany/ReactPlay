import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import StartScreen from "./scr/screens/StartScreen";
import Level1 from "./scr/screens/Level1";
import Level2 from './scr/screens/Level2';
import Level3 from "./scr/screens/Level3";
import Level4 from "./scr/screens/Level4";
import Level5 from "./scr/screens/Level5";
import Level6 from "./scr/screens/Level6";
import Level7 from "./scr/screens/Level7";
import Level8 from "./scr/screens/Level8";
import EndScreen from "./scr/screens/EndScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Level1" component={Level1} />
        <Stack.Screen name="Level2" component={Level2} />
        <Stack.Screen name="Level3" component={Level3} />
        <Stack.Screen name="Level4" component={Level4} />
        <Stack.Screen name="Level5" component={Level5} />
        <Stack.Screen name="Level6" component={Level6} />
        <Stack.Screen name="Level7" component={Level7} />
        <Stack.Screen name="Level8" component={Level8} />
        <Stack.Screen name="EndScreen" component={EndScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
