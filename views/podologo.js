import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

export default function PodologoScreen({ navigation }) {
    
    const [dataPodologo, setDataPodologo] = React.useState({
        name: '',
        email: '',
        datanascimento: '',
        telefone: '',
        endereco: '',
        cpf: '',
        genero: '',
        usuario: '',
        senha: ''
    })

    function updatePatient(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.paciente = value;
        setDataPodologo(newDataPodologo);
    }

    function updateEmail(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.email = value;
        setDataPodologo(newDataPodologo);
    }

    function updateDate(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.data = value;
        setDataPodologo(newDataPodologo);
    }

    function updateTelephone(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.telefone = value;
        setDataPodologo(newDataPodologo);
    }

    function updateAddress(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.endereco = value;
        setDataPodologo(newDataPodologo);
    }

    function updateCpf(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.cpf = value;
        setDataPodologo(newDataPodologo);
    }

    function updateGender(value) {
        const newDataPodologo = {
            ...dataPodologo,
        };
        newDataPodologo.genero = value;
        setDataPodologo(newDataPodologo);
    }

    function updateUsername(value) {
      const newDataPodologo = {
          ...dataPodologo,
      };
      newDataPodologo.usuario = value;
      setDataPodologo(newDataPodologo);
    }

    function updatePassword(value) {
      const newDataPodologo = {
          ...dataPodologo,
      };
      newDataPodologo.senha = value;
      setDataPodologo(newDataPodologo);
    }

    async function Cadastrar() {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const raw = JSON.stringify(dataPodologo);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            const resp = await fetch(
                'https://api-pi-senac.azurewebsites.net/podologo',
                requestOptions
            );
            const bodyResp = await resp.json();
            const token = bodyResp.token;
            SecureStore.setItem('bearer', token);
            navigation.navigate('Podologo');
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <View style={styles.container}>
            <Image width={100} height={200} style={{ flex: 1, objectFit: 'contain' }} source={LogoSenac} />
            <Text style={styles.title}>Podologo</Text>
            <TextInput
                value={dataPodologo.patient}
                onChangeText={updatePatient}
                style={styles.input}
                placeholder='Nome do Paciente'
                secureTextEntry={true}
                keyboardType='default'
                extContentType='patient'
            />
            <TextInput
                value={dataPodologo.email}
                onChangeText={updateEmail}
                style={styles.input}
                placeholder='Email'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='email'
            />
            <TextInput
                value={dataPodologo.date}
                onChangeText={updateDate}
                style={styles.input}
                placeholder='Data de Nascimento'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='date'
            />
            <TextInput
                value={dataPodologo.telephone}
                onChangeText={updateTelephone}
                style={styles.input}
                placeholder='Telefone'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='telephone'
            />
            <TextInput
                value={dataPodologo.address}
                onChangeText={updateAddress}
                style={styles.input}
                placeholder='Endereço'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='address'
            />
            <TextInput
                value={dataPodologo.cpf}
                onChangeText={updateCpf}
                style={styles.input}
                placeholder='Cpf'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='cpf'
            />
            <TextInput
                value={dataPodologo.password}
                onChangeText={updateGender}
                style={styles.input}
                placeholder='Gênero'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='gender'
            />
            <TextInput 
                value={dataPodologo.username} 
                onChangeText={updateUsername} 
                style={styles.input} 
                placeholder='Usuario' 
                keyboardType='usuario-user' 
            />
            <TextInput 
                value={dataPodologo.password} 
                onChangeText={updatePassword} 
                style={styles.input} 
                placeholder='Senha' 
                secureTextEntry={true} 
                keyboardType='default' 
                textContentType='password' 
            />
            <Button
                style={styles.button}
                title="Cadastrar"
                onPress={() => Cadastrar()}
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
