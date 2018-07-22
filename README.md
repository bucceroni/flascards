# Flashcards

UDACITY - PROGRAMA NANODEGREE  
Projeto faz parte da grade do curso [DESENVOLVEDOR REACT](https://br.udacity.com/course/react-nanodegree--nd019).

<hr>

## Descrição do Projeto

Aplicativo para dispositivos móveis (Android ou iOS - ou ambos) que permite que usuários estudem uma coleção de flashcards. Com o app, os usuários poderão criar diferentes categorias de flashcards chamadas de "baralhos", adicionar flashcards a esses baralhos, e fazer os quizes nestes baralhos.

- Requisitos
  - Desktop 
    - Sistema operacional: Windows, Mac ou Linux
    - Browser (Google Chrome, Firefox, etc...)
    - [Node](https://nodejs.org/en/)
    - [Yarn](https://yarnpkg.com/pt-BR/docs/getting-started)
  - Dispositivo Móvel
    - App [Expo](https://expo.io/) 

- Dependências instaladas (package.json)
  - React Native CLI (terminal) `yarn global add react-native-cli`  
  - Create React Native App (terminal) `yarn global add create-react-native-app`
  - Redux `yarn add redux`
  - React Redux `yarn add react-redux`
  - React Navigation `yarn add react-navigation`

- Observação
  - O Create React Native App, atualmente, não funciona bem com NPM v5, devido aos erros no NPM utilizei Yarn para desenvolvimento do projeto.

<hr >

## Iniciar Projeto
Existe diversas formas para iniciar este projeto, descrevi quatro maneiras utilizando `Expo` e `Genymotion`.
- O Expo é um serviço que torna quase tudo que envolve o React Native bem mais fácil. A ideia é não haver nenhuma necessidade de usar Android Studio ou Xcode. Permite inclusive desenvolver para iOS com Windows ou Linux.
  - `Expo no Google Play (Android)`
  - `Expo na App Store (iOS)`
- Genymotion é um emulador gratuito de sistema operacional Android, capaz de proporcionar a seu usuário experimentar versões e aplicativos desse ambiente do Google sem a necessidade de obter dispositivos novos ou realizar downgrades e upgrades em seus tablet ou telefones.

Outras formas acesse:
- [React Native App (doc) - macOS/ Windows/ Linux](https://facebook.github.io/react-native/docs/getting-started.html)
- [codeburst.io - Windows](https://codeburst.io/setting-up-development-environment-using-react-native-on-windows-dd240e69f776)




## 1. Expo App
- Instalar Expo (dispositivo móvel)
  - O dispostivo móvel e o PC devem estar conectados a mesma rede
- Terminal (PC)
  - Escolher diretório `cd Documents`
  - Clonar repositório `git clone https://github.com/bucceroni/flashcards.git`
  - Acesse a pasta do projeto `cd flashcards`
  - Instalar node-modules `yarn install`
  - Iniciar servidor `yarn start`
- Expo (dispositivo móvel)
  - Ler QR Code (sugestão de app `QR code`)
  - Abrir com URL no app `Expo`

## 2. Expo Web
- Acesse `https://expo.io/learn`
- Clique `Try Expo in the browser (Open Snack)`
- Clique `... import git repository`
- Cole em Git Repository `https://github.com/bucceroni/flashcards.git`
- Clique `Import`
- Selecione Android ou iOS `Tap to play`

## 3. Expo Web (URL) 
- Aplicação disponível (código + simulador):
  `https://snack.expo.io/@git/github.com/bucceroni/flashcards`

## 4. Genymotion (simulador android)
- Siga passo a passo o [link](https://medium.com/@devmrin/complete-how-to-create-react-native-app-with-genymotion-android-emulator-on-windows-10-in-10-3834fd90b074)
- Observação: verifique se esta selecionada a opção: `Settings` > `ADB` > `Use Genymotion Android tools (default)`
- Inicio projeto com `yarn run android` ou `npm run android`

<hr >

