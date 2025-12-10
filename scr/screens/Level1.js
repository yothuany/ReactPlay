import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Level1({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>
      {/* Título */}
      <Text style={styles.title}>1 — Componentes</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Um componente é uma função JavaScript que retorna uma interface.
        Ele pode guardar valores e responder a interações do usuário.
      </Text>

      {/* Exemplo interativo */}
      <View style={styles.card}>
        <Text style={styles.counterText}>Cliques: {count}</Text>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Código REAL usado */}
      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`import { Text, TouchableOpacity } from "react-native";
import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Cliques: {count}</Text>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </>
  );
}`}
        </Text>
      </View>

      {/* Explicação */}
      <Text style={styles.footerText}>
        Este componente guarda um valor usando useState.
        Ao clicar no botão, o estado muda e a interface é renderizada novamente.
      </Text>

      {/* Próximo nível */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level2")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 1 e Ir para o 2
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  counterText: {
    fontSize: 16,
    marginBottom: 12,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#22c55e",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
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
    fontFamily: "monospace",
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
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
