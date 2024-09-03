import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function AgendamentoScreen({ navigation }) {
    
    const [dataAgendamento, setDataAgendamento] = React.useState({
        datahora: '',
        paciente: '',
        podologo: '',
        status: '',
        descricao: ''
    });

    function updateField(field, value) {
        setDataAgendamento(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    async function Agendar() {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            const raw = JSON.stringify(dataAgendamento);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            const resp = await fetch(
                'http://172.21.17.100:3000/agendamento',
                requestOptions
            );
            const bodyResp = await resp.json();
            const token = bodyResp.token;
            await SecureStore.setItem('bearer', token);
            navigation.navigate('Agendamento');
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image width={100} height={100} style={styles.logo} source={LogoSenac} />
            <Text style={styles.title}>Agendamento</Text>
            <TextInput
                value={dataAgendamento.datahora}
                onChangeText={(value) => updateField('datahora', value)}
                style={styles.input}
                placeholder="Data e Hora"
                keyboardType="datetime"
            />
            <TextInput
                value={dataAgendamento.paciente}
                onChangeText={(value) => updateField('paciente', value)}
                style={styles.input}
                placeholder="Paciente"
                keyboardType="default"
            />
            <TextInput
                value={dataAgendamento.podologo}
                onChangeText={(value) => updateField('podologo', value)}
                style={styles.input}
                placeholder="Podologo"
                keyboardType="default"
            />
            <TextInput
                value={dataAgendamento.status}
                onChangeText={(value) => updateField('status', value)}
                style={styles.input}
                placeholder='Status'
                keyboardType='default'
            />
            <TextInput
                value={dataAgendamento.descricao}
                onChangeText={(value) => updateField('descricao', value)}
                style={styles.input}
                placeholder='Descrição'
                keyboardType='default'
            />
            <Button
                style={styles.button}
                title="Agendar"
                onPress={Agendar}
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
    },
    button: {
        marginTop: 20,
    },
});
