import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Level3({ navigation }) {
  const [theme, setTheme] = useState("light");

  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#111827" : "#f9fafb" }
      ]}
    >
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#111" }]}>
        3 — Estado controla a interface
      </Text>

      <Text
        style={[
          styles.description,
          { color: isDark ? "#d1d5db" : "#374151" }
        ]}
      >
        O estado define como o componente é renderizado.
        Ao mudar o estado, o React atualiza a tela inteira.
      </Text>

      <View style={styles.card}>
        <Text style={styles.modeText}>
          Modo atual: {isDark ? "Escuro 🌙" : "Claro ☀️"}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setTheme(isDark ? "light" : "dark")}
        >
          <Text style={styles.buttonText}>
            Alternar Modo
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.codeTitle}>Código usado:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`const [theme, setTheme] = useState("light");

const isDark = theme === "dark";`}
        </Text>
      </View>

      <Text style={styles.footerText}>
        Nenhum elemento é alterado manualmente.
        Apenas o estado muda, e o React recalcula a interface.
      </Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level4")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 3 e Ir para o 4
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  modeText: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },

  codeTitle: {
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 14,
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
 backButton: {
    color: "#2563eb",
    marginBottom: 12,
    fontSize: 14,
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
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
  },
});
