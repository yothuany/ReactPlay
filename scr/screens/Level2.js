import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import CodeBlock from "../components/codeBlock";
import { setLevel, getLevel } from "../progress";

export default function Level2({ navigation }) {
  const [name, setName] = useState("");
  const code = `
<TextInput onChangeText={setName} />
<Text>Olá {name}</Text>
`;

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:22 }}>2 — JSX</Text>

      <Text>
        JSX permite combinar HTML com JavaScript.
        Tudo dentro de {"{"} {"}"} é código JS sendo executado.
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        onChangeText={setName}
        style={{ borderWidth:1, marginVertical:10, padding:8 }}
      />

      <Text style={{ fontSize:18 }}>Olá {name}</Text>

      <CodeBlock code={code} />

      <Text>
        O valor digitado é guardado no estado, e exibido imediatamente.
      </Text>

      <Button
        title="Concluir nível"
        onPress={() => {
          setLevel(3);
          navigation.navigate("Level3");
        }}
      />
    </View>
  );
}
