import { View, Text, ScrollView } from "react-native";

export default function CodeBlock({ code }) {
  return (
    <ScrollView
      style={{
        backgroundColor: "#111",
        padding: 12,
        borderRadius: 10,
        marginTop: 15,
      }}
    >
      <Text style={{ color: "#0f0", fontFamily: "monospace" }}>{code}</Text>
    </ScrollView>
  );
}
