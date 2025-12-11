
# 📱 React Native Learning App
📹 Vídeo de Apresentação

Assista à apresentação do app em vídeo, mostrando todas as telas e funcionalidades interativas:
https://drive.google.com/file/d/1tlpPCXnuBmFrm545f6Zqbs_5X_En1-9j/view?usp=sharing

## Descrição do Projeto

Este é um **aplicativo didático em React Native**, desenvolvido para ensinar conceitos fundamentais de desenvolvimento de aplicativos móveis.
O app funciona como **material interativo**, permitindo que o aluno veja o código em ação, interaja com a interface e entenda o resultado imediatamente.

Ele abrange os seguintes conceitos:

* Componentes
* JSX
* Estado (`useState`)
* APIs Nativas (`Platform`, `Dimensions`, `Alert`)
* Estilos dinâmicos
* Props e componentização
* Listas eficientes com `FlatList`
* Navegação entre telas usando `React Navigation`

Cada nível do app apresenta **uma tela temática**, com:

1. Título e descrição do conceito
2. Demonstração prática interativa
3. Código real usado
4. Explicação rápida do funcionamento

---

## Estrutura do Projeto

```
react-native-learning-app/
│
├─ App.js                 # Ponto de entrada do app, configura navegação
├─ package.json
├─ README.md
├─ /screens               # Telas do app (Level1 a Level8, EndScreen)
│   ├─ Level1.js
│   ├─ Level2.js
│   └─ ...
├─ /components            # Componentes reutilizáveis
│   └─ Card.js
└─ /assets                # Imagens, ícones ou outros recursos
```

---

## Instalação e Execução

### Pré-requisitos

* Node.js (v18 ou superior recomendado)
* npm ou yarn
* Expo CLI

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/react-native-learning-app.git
```

2. Instale as dependências:

```bash
cd react-native-learning-app
npm install
# ou
yarn install
```

3. Execute o app:

```bash
npx expo start
```

4. Abra no **simulador** ou **dispositivo físico** usando o QR code fornecido pelo Expo.

---

## Como o App Ensina

Cada tela (Level) é projetada para que o aluno:

1. **Veja o conceito em ação**: por exemplo, ao clicar em um botão, o contador aumenta.
2. **Interaja** com os elementos e observe mudanças visuais.
3. **Compare com o código real** exibido na tela.
4. **Entenda a lógica** de cada conceito sem necessidade de teoria isolada.

| Level | Conceito     | Demonstração prática                                         |
| ----- | ------------ | ------------------------------------------------------------ |
| 1     | Componentes  | Contador interativo usando `useState`                        |
| 2     | JSX          | `TextInput` atualiza texto em tempo real                     |
| 3     | Estado       | Alternância de tema claro/escuro, mudando visualmente a tela |
| 4     | APIs Nativas | Mostra plataforma, dimensões da tela e alertas               |
| 5     | Estilos      | Quadrado muda de cor dinamicamente                           |
| 6     | Props        | Componente `Card` reutilizado com dados diferentes           |
| 7     | FlatList     | Lista numerada de lições renderizada eficientemente          |
| 8     | Navegação    | Troca de telas e envio de parâmetros (`user` e `level`)      |

---

## Principais Decisões Técnicas

* **`useState`**: controle de estado e interatividade.
* **`StyleSheet` + arrays**: estilos dinâmicos e consistentes.
* **Componentização e Props**: reaproveitamento de código (`Card`).
* **`FlatList`**: renderização eficiente de listas.
* **`React Navigation`**: navegação linear e envio de dados entre telas.
* **APIs Nativas**: integração com recursos do dispositivo (`Platform`, `Dimensions`, `Alert`).

---


