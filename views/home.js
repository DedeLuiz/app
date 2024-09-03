import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [dataInicio, setDataInicio] = React.useState({
    inicio: '',
    agendamentos: '',
    paciente: '',
    perfil: '',
    profissional: '',
  });

  async function inicio() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataInicio);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      const resp = await fetch(
        'https://api-pi-senac.azurewebsites.net/home',
        requestOptions
      );
      const bodyResp = await resp.json();
      const token = bodyResp.token;
      SecureStore.setItem('bearer', token);
      navigation.navigate('Inicio');
    } catch (error) {
      console.warn(error);
    }
  }

  function navegarPara(destino) {
    navigation.navigate(destino)
  }

  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={200}
        style={{ flex: 1, objectFit: 'contain' }}
        source={LogoSenac}
      />
      <Text style={styles.title}>Home</Text>
      {/* <View style={styles.buttonContainer}>
        <Button
          title="Início"
          onPress={() => inicio()}
        />
      </View> */}
      <View style={styles.buttonContainer}>
        <Button
          title="Agendamentos"
          onPress={() => navegarPara("Agendamento")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastro Paciente"
          onPress={() => navegarPara("Cadastro")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Confirmar Consulta"
          onPress={() => navegarPara("Consulta")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastro Profissional"
          onPress={() => navegarPara("Podologo")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    padding: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    marginBottom: 80,
  },
  buttonContainer: {
    width: '200%',
    marginVertical: 10,
  },
});
