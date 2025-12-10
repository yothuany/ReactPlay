import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { useState } from "react";

export default function Level2({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>2 — JSX</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        JSX é uma extensão de sintaxe que permite combinar a marcação de interface 
        (como HTML) com o código JavaScript. Tudo o que estiver dentro de chaves 
        {' { } '} é código JS puro sendo executado.
      </Text>

      {/* Exemplo Interativo */}
      <Text style={styles.sectionLabel}>Exemplo Interativo:</Text>

      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.greeting}>
        Olá {name.trim() === "" ? "Visitante" : name}
      </Text>

      {/* Código */}
      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`// HTML misturado com JavaScript:
const name = "Mundo";

<p>Olá {name}</p>
// Saída: Olá Mundo`}
        </Text>
      </View>

      {/* Explicação */}
      <Text style={styles.footerText}>
        O valor digitado no campo é guardado no estado {'`name`'} e exibido
        imediatamente no JSX.
      </Text>

      {/* Botão */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level3")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 2 e Ir para o 3
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 20,
    color: "#111",
  },
  codeBox: {
    backgroundColor: "#111827",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  code: {
    color: "#e5e7eb",
    fontSize: 12,
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
  footerText: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
  },
  nextButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});
