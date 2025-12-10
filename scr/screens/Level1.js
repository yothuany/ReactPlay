import { useState } from "react";
import { View, Text, Button } from "react-native";
import CodeBlock from "../components/codeBlock";
import { setLevel } from "../progress";

export default function Level1({ navigation }) {
  const [count, setCount] = useState(0);

  const code = `
function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Clicks: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
}
`;

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:22, marginBottom:10 }}>1 — Componentes</Text>

      <Text>
        Um componente é uma função que retorna a interface (UI).
        Ele recebe valores e exibe algo na tela.
      </Text>

      <View style={{ alignItems:"center", marginVertical:20 }}>
        <Text>Clicks: {count}</Text>
        <Button title="+" onPress={() => setCount(count + 1)} />
      </View>

      <Text style={{ fontWeight:"bold", marginTop:10 }}>
        Código usado acima:
      </Text>
      <CodeBlock code={code} />

      <Text style={{ marginTop:10 }}>
        Nesta função, usamos useState() para gerar um estado interno.
      </Text>

      <Button
        title="Concluir nível"
        onPress={() => {
          setLevel(2);
          navigation.navigate("Level2");
        }}
      />
    </View>
  );
}
