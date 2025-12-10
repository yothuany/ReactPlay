import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const lessons = [
  { id: "1", title: "Componentes" },
  { id: "2", title: "JSX" },
  { id: "3", title: "Estado (useState)" },
  { id: "4", title: "Estilos" },
];

export default function Level7({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>⬅ Voltar</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>7 — Listas (FlatList)</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Em React Native, usamos a FlatList para exibir listas de dados.
        Ela é mais eficiente que um map comum, pois renderiza apenas
        os itens visíveis na tela.
      </Text>

      {/* Exemplo interativo */}
      <Text style={styles.sectionLabel}>Exemplo Interativo:</Text>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemIndex}>{index + 1}</Text>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Código real usado */}
      <Text style={styles.codeTitle}>Código usado neste exemplo:</Text>

      <View style={styles.codeBox}>
        <Text style={styles.code}>
{`const lessons = [
  { id: "1", title: "Componentes" },
  { id: "2", title: "JSX" },
];

<FlatList
  data={lessons}
  keyExtractor={(item) => item.id}
  renderItem={({ item, index }) => (
    <View>
      <Text>{index + 1}</Text>
      <Text>{item.title}</Text>
    </View>
  )}
/>`}
        </Text>
      </View>

      {/* Explicação passo a passo */}
      <Text style={styles.footerText}>
        • data: é o array com os dados da lista.{"\n"}
        • renderItem: define como cada item será exibido.{"\n"}
        • item: representa o objeto atual da lista.{"\n"}
        • index: é a posição do item (0, 1, 2...).{"\n"}
        • keyExtractor: garante uma chave única para cada item.
      </Text>

      {/* Próximo */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("Level8")}
      >
        <Text style={styles.nextButtonText}>
          Concluir Nível 7 e Ir para o 8
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
    marginBottom: 16,
  },

  sectionLabel: {
    fontWeight: "600",
    marginBottom: 8,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  itemIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#2563eb",
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    marginRight: 12,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },

  codeTitle: {
    fontWeight: "600",
    marginTop: 20,
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
