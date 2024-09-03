import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Text, StyleSheet, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen({ navigation }) {
    
    const [dataCadastro, setDataCadastro] = React.useState({
        name: '',
        email: '',
        datanascimento: '',
        telefone: '',
        endereco: '',
        cpf: '',
        genero: ''
    });

    function updateField(field, value) {
        setDataCadastro({
            ...dataCadastro,
            [field]: value
        });
    }

    async function Cadastrar() {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const raw = JSON.stringify(dataCadastro);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            const resp = await fetch(
                'https://api-pi-senac.azurewebsites.net/cadastro',
                requestOptions
            );
            const bodyResp = await resp.json();
            const token = bodyResp.token;
            await SecureStore.setItem('bearer', token);
            navigation.navigate('Cadastro');
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image width={200} height={100} style={styles.logo} source={LogoSenac} />
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                value={dataCadastro.name}
                onChangeText={(value) => updateField('name', value)}
                style={styles.input}
                placeholder='Nome do Paciente'
                placeholderTextColor="#000"
                keyboardType='default'
            />
            <TextInput
                value={dataCadastro.email}
                onChangeText={(value) => updateField('email', value)}
                style={styles.input}
                placeholder='Email'
                placeholderTextColor="#000"
                keyboardType='email-address'
            />
            <TextInput
                value={dataCadastro.datanascimento}
                onChangeText={(value) => updateField('datanascimento', value)}
                style={styles.input}
                placeholder='Data de Nascimento'
                placeholderTextColor="#000"
                keyboardType='default'
            />
            <TextInput
                value={dataCadastro.telefone}
                onChangeText={(value) => updateField('telefone', value)}
                style={styles.input}
                placeholder='Telefone'
                placeholderTextColor="#000"
                keyboardType='phone-pad'
            />
            <TextInput
                value={dataCadastro.endereco}
                onChangeText={(value) => updateField('endereco', value)}
                style={styles.input}
                placeholder='Endereço'
                placeholderTextColor="#000"
                keyboardType='default'
            />
            <TextInput
                value={dataCadastro.cpf}
                onChangeText={(value) => updateField('cpf', value)}
                style={styles.input}
                placeholder='CPF'
                placeholderTextColor="#000"
                keyboardType='numeric'
            />
            <TextInput
                value={dataCadastro.genero}
                onChangeText={(value) => updateField('genero', value)}
                style={styles.input}
                placeholder='Gênero'
                placeholderTextColor="#000"
                keyboardType='default'
            />
            <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    title: {
        fontSize: 40,
        marginBottom: 30,
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
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
