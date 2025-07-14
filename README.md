<div align="center">
  <h1>Meetapp Mobile</h1>
  <p>
    <img src="https://img.shields.io/badge/version-0.0.1-blue.svg" />
    <img src="https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey" />
    <img src="https://img.shields.io/badge/license-MIT-green.svg" />
  </p>
  <blockquote>Aplicativo mobile para gerenciamento de eventos (Meetups), desenvolvido em React Native.</blockquote>
</div>

---

## 📑 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Bibliotecas](#principais-bibliotecas)
- [Padrões de Projeto](#padrões-de-projeto)
- [Setup e Configuração](#setup-e-configuração)
- [Screenshots](#screenshots)
- [Observações](#observações)
- [Autor](#-autor)

---

## 📝 Sobre o Projeto
Aplicativo para inscrição, visualização e gerenciamento de eventos (Meetups), com autenticação, dashboard, inscrições, perfil e integração com backend REST.

---

## 🚀 Funcionalidades
- 👤 Cadastro e login de usuários
- 📅 Listagem de eventos por data (dashboard)
- 📝 Inscrição e cancelamento em eventos
- ⭐ Visualização de eventos inscritos
- 🛠️ Edição de perfil do usuário
- 🔄 Paginação e filtro de eventos por data
- 🔗 Comunicação com backend via Axios

---

## 📁 Estrutura de Pastas
```bash
├── src
│   ├── Components      # Componentes reutilizáveis (Button, Input, Header, etc)
│   ├── Config          # Configurações globais (App, Reactotron)
│   ├── Route           # Rotas e navegação
│   ├── Services        # API, Redux, Sagas, Persist
│   ├── Views           # Telas (SignIn, SignUp, Dashboard, Subscribe, Profile)
│   └── ...
```

---

## 📦 Principais Bibliotecas
- **React Native**: Base do app mobile
- **Styled-Components**: Estilização dos componentes
- **React Navigation (SwitchNavigator, BottomTabNavigator)**: Navegação entre telas
- **Redux, Redux-Saga, Redux-Persist**: Gerenciamento de estado, side effects e persistência
- **Reactotron**: Debug e monitoramento
- **Axios**: Requisições HTTP
- **date-fns**: Manipulação de datas
- **react-native-vector-icons**: Ícones customizados
- **react-native-linear-gradient**: Gradiente de fundo

---

## 🏛️ Padrões de Projeto
- 🧩 **Atomic Design** para componentes reutilizáveis
- 🦆 **Ducks Pattern** para organização dos módulos Redux
- 🗂️ **Separação de responsabilidades** (Views, Components, Services, Config)
- ⚛️ **Uso de hooks** (`useState`, `useEffect`, `useDispatch`, `useSelector`)
- 🎨 **Estilização isolada** com styled-components

---

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js >= 10.x
- Yarn ou npm
- Android Studio (para Android) ou Xcode (para iOS)
- Backend Meetapp rodando (ajuste o IP em `src/Services/api.js`)

### Instalação
```bash
# Instale as dependências
npm install
# ou
yarn install

# Android
yarn android
# iOS (MacOS)
yarn ios

# Inicie o Metro Bundler
yarn start
```

### Configuração do Backend
- Altere o IP do backend em `src/Services/api.js` para o IP da sua máquina/servidor.

### Debug
- Use o [Reactotron](https://github.com/infinitered/reactotron) para monitorar Redux, Sagas e requisições.

---

## 📸 Screenshots
<div align="center">
  <img src="assets/signin.jpeg" alt="Login" width="200" />
  <img src="assets/signup.jpeg" alt="Cadastro" width="200" />
  <img src="assets/meetups.jpeg" alt="Dashboard" width="200" />
  <img src="assets/subscribes.jpeg" alt="Inscrições" width="200" />
  <img src="assets/perfil.jpeg" alt="Perfil" width="200" />
</div>

---

## ⚠️ Observações
- Suporte principal: **Android**
- Para rodar no emulador/dispositivo físico, o backend deve estar acessível pelo IP configurado.
- Projeto utiliza **Redux Persist** para manter o login entre sessões.
- Estilização 100% em **styled-components**.

---

## 👤 Autor
by **Rodolfo M. F. Abreu**
<p align="center">
  <sub>Desenvolvido para o desafio GoStack 🚀</sub>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%20por-Rocketseat-blueviolet" />
</p>

