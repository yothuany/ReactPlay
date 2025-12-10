import { View, Text, Button } from "react-native";

export default function EndScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>
        Parabéns! Você concluiu 🚀
      </Text>
      <Button title="Reiniciar" onPress={() => navigation.navigate("Start")} />
    </View>
  );
}
