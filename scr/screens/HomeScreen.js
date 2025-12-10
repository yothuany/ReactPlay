import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>
        ReactPlay 🚀
      </Text>

      <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 30 }}>
        Aprenda React Native passando por níveis prácticos.
      </Text>

      <Button title="Iniciar" onPress={() => navigation.navigate('Level1')} />
    </View>
  );
}
