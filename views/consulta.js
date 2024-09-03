import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function ConsultaScreen({ navigation }) {
  
  const [dataConsulta, setDataConsulta] = React.useState({
    datahora: '',
    paciente: '',
    podologo: '',
  });

  function updateField(field, value) {
    setDataConsulta(prevState => ({
      ...prevState,
      [field]: value
    }));
  }

  async function Consultar() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataConsulta);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      const resp = await fetch(
        'https://api-pi-senac.azurewebsites.net/consulta',
        requestOptions
      );
      const bodyResp = await resp.json();
      const token = bodyResp.token;
      await SecureStore.setItem('bearer', token);
      navigation.navigate('Consulta');
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        width={100}
        height={200}
        style={styles.logo}
        source={LogoSenac}
      />
      <Text style={styles.title}>Consulta</Text>
      <TextInput
        value={dataConsulta.datahora}
        onChangeText={(value) => updateField('datahora', value)}
        style={styles.input}
        placeholder="Data e Hora"
        keyboardType="default"
      />
      <TextInput
        value={dataConsulta.paciente}
        onChangeText={(value) => updateField('paciente', value)}
        style={styles.input}
        placeholder="Paciente"
        keyboardType="default"
      />
      <TextInput
        value={dataConsulta.podologo}
        onChangeText={(value) => updateField('podologo', value)}
        style={styles.input}
        placeholder="Podologo"
        keyboardType="default"
      />
      <Button
        title="Consultar"
        onPress={Consultar}
        color="#007AFF"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    textAlign: 'center',
    color: '#000'
  },
  button: {
    marginTop: 20,
  },
});
