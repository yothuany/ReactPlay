import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Card central */}
      <View style={styles.card}>
        <Text style={styles.emoji}>🚀</Text>

        <Text style={styles.title}>React Play</Text>

        <Text style={styles.subtitle}>
          Aprenda React Native de forma prática,
          interativa e divertida.
        </Text>

        {/* Lista visual */}
        <View style={styles.list}>
          <Text style={styles.listItem}>✅ Componentes</Text>
          <Text style={styles.listItem}>✅ JSX</Text>
          <Text style={styles.listItem}>✅ Estado & Hooks</Text>
          <Text style={styles.listItem}>✅ Estilos & Navegação</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Level1")}
        >
          <Text style={styles.buttonText}>🎯 Iniciar Curso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ff", // fundo azul bem suave
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2563eb",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    marginBottom: 20,
  },

  list: {
    alignSelf: "stretch",
    marginBottom: 24,
  },

  listItem: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 6,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 999,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
