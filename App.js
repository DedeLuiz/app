import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/login.js'
import HomeScreen from './views/home.js';
import CadastroScreen from './views/cadastro.js';
import PodologoScreen from './views/podologo.js';
import ConsultaScreen from './views/consulta.js';
import AgendamentoScreen from './views/agendamento.js';
import AnamneseScreen from './views/ficha.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Podologo" component={PodologoScreen} />
      <Stack.Screen name="Consulta" component={ConsultaScreen} />
      <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
      <Stack.Screen name="Ficha" component={AnamneseScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
