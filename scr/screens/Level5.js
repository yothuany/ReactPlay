import { View, Text, Button } from "react-native";
import CodeBlock from "../components/codeBlock";
import { setLevel } from "../progress";

export default function Level5({ navigation }) {
  const code = `
navigation.navigate("Level2")
`;

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:22 }}>5 — Navegação</Text>

      <Text>
        React Navigation permite criar múltiplas telas e navegar entre elas.
      </Text>

      <CodeBlock code={code} />

      <Button
        title="Concluir curso"
        onPress={() => {
          setLevel(6);
          navigation.navigate("End");
        }}
      />
    </View>
  );
}
