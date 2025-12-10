import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Level5({ navigation }) {
  const [color, setColor] = useState("blue");

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButton}>⬅ Voltar</Text>
            </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>5 — Estilos</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Estilos controlam a aparência dos componentes. No React Native, os
        estilos são definidos com objetos JavaScript usando o StyleSheet.
        Podemos alterar estilos dinamicamente com base no estado.
      </Text>

      {/* Exemplo Interativo */}
      <View style={styles.card}>
        <View
          style={[
            styles.box,
            {
              backgroundColor:
                color === "blue" ? "#3b82f6" : "#ef4444",
            },
          ]}
        />

        <Text style={styles.helperText}>
          Cor atual: {color === "blue" ? "Azul" : "Vermelho"}
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.colorButton,
              { backgroundColor: "#3b82f6" },
            ]}
            onPress={() => setColor("blue")}
          >
            <Text style={styles.buttonText}>Azul</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.colorButton,
              { backgroundColor: "#ef4444" },
            ]}
            onPress={() => setColor("red")}
          >
            <Text style={styles.buttonText}>Vermelho</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Código real */}
      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`const [color, setColor] = useState("blue");

<View
  style={[
    styles.box,
    {
      backgroundColor:
        color === "blue" ? "#3b82f6" : "#ef4444",
    },
  ]}
/>`}
        </Text>
      </View>

      {/* Explicação */}
      <Text style={styles.footerText}>
        • O estado "color" guarda a cor atual{"\n"}
        • O style aceita um array de estilos{"\n"}
        • O último estilo do array pode ser dinâmico{"\n\n"}
        Assim, a aparência do componente muda sem recarregar a tela.
      </Text>

      {/* Próximo nível */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level6")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 5 e Ir para o 6
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  box: {
    width: 96,
    height: 96,
    borderRadius: 16,
    marginBottom: 12,
  },
  helperText: {
    fontSize: 14,
    marginBottom: 16,
    color: "#374151",
  },
   backButton: {
    color: "#2563eb",
    marginBottom: 12,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  colorButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
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
    fontFamily: "monospace",
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
