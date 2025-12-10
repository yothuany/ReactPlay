import { useState } from "react";
import { View, Text, Button } from "react-native";
import CodeBlock from "../components/codeBlock";
import { setLevel } from "../progress";

export default function Level3({ navigation }) {
  const [value, setValue] = useState(0);

  const code = `
const [value, setValue] = useState(0);
`;

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:22 }}>3 — Estado</Text>
      <Text>
        Estado (state) é o que permite que a interface mude quando o usuário
        interage com ela.
      </Text>

      <Text style={{ fontSize:18, marginVertical:10 }}>Valor: {value}</Text>
      <Button title="+" onPress={() => setValue(value + 1)} />

      <CodeBlock code={code} />

      <Text>
        useState retorna um valor e uma função que atualiza esse valor.
      </Text>

      <Button
        title="Concluir nível"
        onPress={() => {
          setLevel(4);
          navigation.navigate("Level4");
        }}
      />
    </View>
  );
}
