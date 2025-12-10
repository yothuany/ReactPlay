import { View, Text, Button } from "react-native";
import { getLevel } from "../progress";

export default function StartScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{ fontSize:26, marginBottom:30 }}>React Play</Text>
      <Button title="Iniciar" onPress={() => navigation.navigate("Level1")} />
    </View>
  );
}
