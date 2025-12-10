import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CodeBlock from "../components/codeBlock";
import { setLevel } from "../progress";

export default function Level4({ navigation }) {
  const [color, setColor] = useState("blue");

  const code = `
const styles = StyleSheet.create({
  box: { width:100, height:100 }
});
`;

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:22 }}>4 — Estilos</Text>

      <View style={[styles.box, { backgroundColor: color }]} />

      <Button title="Azul" onPress={() => setColor("blue")} />
      <Button title="Vermelho" onPress={() => setColor("red")} />

      <CodeBlock code={code} />

      <Text>
        StyleSheet organiza seus estilos separadamente do componente.
      </Text>

      <Button
        title="Concluir nível"
        onPress={() => {
          setLevel(5);
          navigation.navigate("Level5");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});
