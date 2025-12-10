import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EndScreen({ navigation, route }) {
  const user = route?.params?.user ?? "Usuário";
  const level = route?.params?.level ?? 0;

  return (
    <View style={styles.container}>
      {/* Voltar (topo) */}

      {/* Conteúdo central */}
      <View style={styles.center}>
        <View style={styles.card}>
          <Text style={styles.title}>🎉 Parabéns!</Text>

          <Text style={styles.text}>
            {user}, você concluiu todos os níveis!
          </Text>

          <Text style={styles.level}>
            Último nível concluído: {level}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.buttonText}>Voltar para o início</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },

  /* Botão voltar fixo no topo */
  backWrapper: {
    position: "absolute",
    top: 24,
    left: 24,
    zIndex: 10,
  },

  backButton: {
    color: "#2563eb",
    fontSize: 14,
  },

  /* Centralização total */
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  text: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 8,
    textAlign: "center",
  },

  level: {
    fontSize: 14,
    color: "#16a34a",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
