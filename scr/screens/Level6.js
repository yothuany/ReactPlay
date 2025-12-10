import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Card({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{description}</Text>
    </View>
  );
}

export default function Level6({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>6 — Props</Text>

      <Text style={styles.description}>
        Props são valores passados de um componente pai para um componente filho.
        Elas permitem reutilizar componentes com dados diferentes.
      </Text>

      <Card
        title="React"
        description="Biblioteca para criar interfaces"
      />

      <Card
        title="React Native"
        description="Cria apps nativos usando React"
      />

      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`function Card({ title, description }) {
  return (
    <>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </>
  );
}

<Card title="React" description="Biblioteca UI" />`}
        </Text>
      </View>

      <Text style={styles.footerText}>
        O componente Card é reutilizado com props diferentes, sem duplicar código.
      </Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level7")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 6 e Ir para o 7
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
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#374151",
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
  nextButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
});
