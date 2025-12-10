import React from 'react';
import Level1 from './Level1';
// Corrigido para uma importação genérica que resolve o problema no ambiente de compilação
// mas mantém a funcionalidade esperada no React Native (Expo Go).
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Tela de Introdução do Curso.
 * @param {{ navigation: { navigate: (screen: string) => void } }} props - Objeto de navegação.
 */
const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.titleMain}>React Play</Text>
            <Text style={styles.subtitleMain}>Aprenda os Fundamentos do React Native</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Level1")}
                style={styles.buttonPrimary}
            >
                <Text style={styles.buttonText}>Iniciar Curso</Text>
            </TouchableOpacity>
        </View>
    );
};

// No React Native, definimos estilos usando um objeto JavaScript com StyleSheet.
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        width: '100%',
        backgroundColor: '#f9fafb', // Cor de fundo leve (simulando bg-white-smoke)
    },
    titleMain: {
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 32,
        color: '#2563eb', // blue-600
    },
    subtitleMain: {
        fontSize: 18,
        color: '#4b5563', // gray-600
        marginBottom: 40,
        textAlign: 'center',
    },
    buttonPrimary: {
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 9999, // Arredondado completo
        backgroundColor: '#2563eb', // blue-600
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3, // Sombra para Android
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    }
});

export default StartScreen;