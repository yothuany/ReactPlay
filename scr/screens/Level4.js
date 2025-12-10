import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function Level4({ navigation }) {
  // API nativa que retorna dados reais do dispositivo
  const { width, height } = Dimensions.get("window");

  function showAlert() {
    // A API muda de acordo com a plataforma
    if (Platform.OS === "web") {
      alert("Este alerta vem da API nativa do navegador");
    } else {
      Alert.alert(
        "API Nativa",
        "Este alerta é fornecido pelo sistema operacional"
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>4 — APIs Nativas</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        APIs nativas são recursos fornecidos diretamente pelo sistema operacional
        (Android, iOS ou Web). No React Native, usamos essas APIs para acessar
        funcionalidades reais do dispositivo.
      </Text>

      {/* Card interativo */}
      <View style={styles.card}>
        <Text style={styles.infoText}>
          📱 Plataforma atual: {Platform.OS}
        </Text>

        <Text style={styles.infoText}>
          📐 Tamanho da tela: {width} x {height}
        </Text>

        <TouchableOpacity style={styles.circleButton} onPress={showAlert}>
          <Text style={styles.buttonText}>Mostrar Alert</Text>
        </TouchableOpacity>
      </View>

      {/* Código real */}
      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`import { Alert, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

if (Platform.OS === "web") {
  alert("Alerta do navegador");
} else {
  Alert.alert("Alerta nativo");
}`}
        </Text>
      </View>

      {/* Explicação */}
      <Text style={styles.footerText}>
        • Platform identifica em qual ambiente o app está rodando{"\n"}
        • Dimensions acessa o tamanho real da tela{"\n"}
        • Alert mostra mensagens nativas do sistema{"\n\n"}
        Essas APIs tornam o app inteligente e adaptável a cada plataforma.
      </Text>

      {/* Próximo */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level5")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 4 e Ir para o 5
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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
    color: "#111827",
  },
  circleButton: {
    marginTop: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: "#22c55e",
  },
  buttonText: {
    color: "#fff",
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
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
  footerText: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 20,
    lineHeight: 18,
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
