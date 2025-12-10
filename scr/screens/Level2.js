import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useState } from "react";

export default function Level2({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>
      {/* Título */}
      <Text style={styles.title}>2 — JSX</Text>

      {/* Explicação principal */}
      <Text style={styles.description}>
        JSX é uma forma de escrever a interface usando JavaScript.
        Tudo o que está entre {"{ }"} é código JS sendo executado.
        Sempre que um valor muda, o React atualiza a interface.
      </Text>

      {/* Exemplo interativo */}
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

      {/* Código REAL usado */}
      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`import { Text, TextInput } from "react-native";
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");

  return (
    <>
      <TextInput
        value={name}
        onChangeText={setName}
      />

      <Text>
        Olá {name.trim() === "" ? "Visitante" : name}
      </Text>
    </>
  );
}`}
        </Text>
      </View>

      {/* Explicação detalhada */}
      <Text style={styles.footerText}>
        O valor digitado é guardado no estado "name".
        O JSX usa esse valor diretamente dentro do texto.
        A expressão dentro de {"{ }"} decide o que será exibido
        com base no valor do estado.
      </Text>

      {/* Próximo nível */}
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
  codeTitle: {
    fontWeight: "600",
    marginBottom: 8,
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
   backButton: {
    color: "#2563eb",
    marginBottom: 12,
    fontSize: 14,
  },
  nextButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});
