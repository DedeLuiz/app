import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

export default function ConsultaScreen({ navigation }) {
  
  const [dataConsulta, setDataConsulta] = React.useState({
    datahora: '',
    paciente: '',
    podologo: '',
  });

  function updateDatetime(value) {
    const newDataConsulta = {
      ...dataConsulta,
    };
    newDataConsulta.datahora = value;
    setDataConsulta(newDataConsulta);
  }

  function updatePaciente(value) {
    const newDataConsulta = {
      ...dataConsulta,
    };
    newDataConsulta.paciente = value;
    setDataConsulta(newDataConsulta);
  }

  function updatePodologo(value) {
    const newDataConsulta = {
      ...dataConsulta,
    };
    newDataConsulta.podologo = value;
    setDataConsulta(newDataConsulta);
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
      SecureStore.setItem('bearer', token);
      navigation.navigate('Consulta');
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        width={100}
        height={200}
        style={{ flex: 1, objectFit: 'contain' }}
        source={LogoSenac}
      />
      <Text style={styles.title}>Consulta</Text>
      <TextInput
        value={dataConsulta.datahora}
        onChangeText={updateDatetime}
        style={styles.input}
        placeholder="Data e Hora"
        keyboardType="date-time"
      />
      <TextInput
        value={dataConsulta.paciente}
        onChangeText={updatePaciente}
        style={styles.input}
        placeholder="Paciente"
        secureTextEntry={true}
        keyboardType="default"
        textContentType="paciente"
      />
      <TextInput
        value={dataConsulta.podologo}
        onChangeText={updatePodologo}
        style={styles.input}
        placeholder="Podologo"
        secureTextEntry={true}
        keyboardType="default"
        textContentType="podologo"
      />
      <Button
        style={styles.button}
        title="Consultar"
        onPress={() => Consultar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 370,
    padding: 60,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
  },
  input: {
    flex: 1,
    fontSize: 20,
    width: '100%',
    maxHeight: 50,
    textAlign: 'center',
    flexWrap: 'nowrap',
    borderColor: '#000',
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    fontSize: 20,
    width: 1300,
    display: 'flex',
  },
});
