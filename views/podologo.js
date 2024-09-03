import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
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
    });

    function updateField(field, value) {
        setDataPodologo(prevState => ({
            ...prevState,
            [field]: value
        }));
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <Image width={100} height={100} style={styles.logo} source={LogoSenac} />
                <Text style={styles.title}>Podologo</Text>
                <TextInput
                    value={dataPodologo.name}
                    onChangeText={(value) => updateField('name', value)}
                    style={styles.input}
                    placeholder='Nome'
                    keyboardType='default'
                    textContentType='name'
                />
                <TextInput
                    value={dataPodologo.email}
                    onChangeText={(value) => updateField('email', value)}
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                />
                <TextInput
                    value={dataPodologo.datanascimento}
                    onChangeText={(value) => updateField('datanascimento', value)}
                    style={styles.input}
                    placeholder='Data de Nascimento'
                    keyboardType='default'
                    textContentType='none'
                />
                <TextInput
                    value={dataPodologo.telefone}
                    onChangeText={(value) => updateField('telefone', value)}
                    style={styles.input}
                    placeholder='Telefone'
                    keyboardType='phone-pad'
                    textContentType='telephoneNumber'
                />
                <TextInput
                    value={dataPodologo.endereco}
                    onChangeText={(value) => updateField('endereco', value)}
                    style={styles.input}
                    placeholder='Endereço'
                    keyboardType='default'
                    textContentType='streetAddress'
                />
                <TextInput
                    value={dataPodologo.cpf}
                    onChangeText={(value) => updateField('cpf', value)}
                    style={styles.input}
                    placeholder='CPF'
                    keyboardType='default'
                    textContentType='none'
                />
                <TextInput
                    value={dataPodologo.genero}
                    onChangeText={(value) => updateField('genero', value)}
                    style={styles.input}
                    placeholder='Gênero'
                    keyboardType='default'
                    textContentType='none'
                />
                <TextInput
                    value={dataPodologo.usuario}
                    onChangeText={(value) => updateField('usuario', value)}
                    style={styles.input}
                    placeholder='Usuário'
                    keyboardType='default'
                    textContentType='username'
                />
                <TextInput
                    value={dataPodologo.senha}
                    onChangeText={(value) => updateField('senha', value)}
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    keyboardType='default'
                    textContentType='password'
                />
                <Button
                    style={styles.button}
                    title="Cadastrar"
                    onPress={Cadastrar}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 50,
        fontSize: 16,
        width: '100%',
        borderColor: '#000',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        textAlign: 'center', // Centraliza o texto e o placeholder
    },
    button: {
        marginTop: 20,
        width: '80%', // Ajuste o tamanho do botão
    },
});
