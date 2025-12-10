import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Level8({ navigation }) {
  function goToDetails() {
    navigation.navigate("EndScreen", {
      user: "Aluno React",
      level: 8,
    });
  }

  return (
    <View style={styles.container}>
      {/* Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>8 — Navegação</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Navegação permite trocar de telas dentro do app. No React Native,
        usamos bibliotecas como o React Navigation para criar rotas e
        enviar informações entre telas.
      </Text>

      {/* Card interativo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Exemplo prático</Text>

        <Text style={styles.cardText}>
          Ao clicar no botão abaixo, você será redirecionado para a tela final,
          enviando parâmetros junto com a navegação.
        </Text>

        <TouchableOpacity style={styles.actionButton} onPress={goToDetails}>
          <Text style={styles.actionButtonText}>
            Ir para Tela Final 🚀
          </Text>
        </TouchableOpacity>
      </View>

      {/* Código */}
      <Text style={styles.codeTitle}>Código usado:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`navigation.navigate("EndScreen", {
  user: "Aluno React",
  level: 8,
});

// Na tela de destino:
// route.params.user
// route.params.level`}
        </Text>
      </View>

      {/* Explicação final */}
      <Text style={styles.footerText}>
        A navegação permite criar fluxos dentro do app. Com parâmetros, você
        consegue enviar dados entre telas, como nomes, IDs ou informações
        do usuário.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9fafb",
  },

  backButton: {
    color: "#2563eb",
    marginBottom: 12,
    fontSize: 14,
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
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 16,
  },

  actionButton: {
    backgroundColor: "#22c55e",
    padding: 14,
    borderRadius: 8,
  },

  actionButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
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
  },
});
