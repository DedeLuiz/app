import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

export default function AgendamentoScreen({ navigation }) {
    
    const [dataAgendamento, setDataAgendamento] = React.useState({
        datahora: '',
        paciente: '',
        podologo: '',
        status: '',
        descricao: ''
    })

    function updateDatetime(value) {
        const newDataAgendamento = {
          ...dataAgendamento,
        };
        newDataAgendamento.datahora = value;
        setDataAgendamento(newDataAgendamento);
    }
    
    function updatePaciente(value) {
        const newDataAgendamento = {
          ...dataAgendamento,
        };
        newDataAgendamento.paciente = value;
        setDataAgendamento(newDataAgendamento);
    }
    
    function updatePodologo(value) {
        const newDataAgendamento = {
          ...dataAgendamento,
        };
        newDataAgendamento.podologo = value;
        setDataAgendamento(newDataAgendamento);
    }

    function updateStatus(value) {
        const newDataAgendamento = {
            ...dataAgendamento,
        };
        newDataAgendamento.status = value;
        setDataAgendamento(newDataAgendamento);
    }

    function updateDescription(value) {
        const newDataAgendamento = {
            ...dataAgendamento,
        };
        newDataAgendamento.descricao = value;
        setDataAgendamento(newDataAgendamento);
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
            SecureStore.setItem('bearer', token);
            navigation.navigate('Agendamento');
        } catch (error) {
            console.warn(error);
        }
    }

    return (
        <View style={styles.container}>
            <Image width={100} height={200} style={{ flex: 1, objectFit: 'contain' }} source={LogoSenac} />
            <Text style={styles.title}>Agendamento</Text>
            <TextInput
                value={dataAgendamento.datahora}
                onChangeText={updateDatetime}
                style={styles.input}
                placeholder="Data e Hora"
                keyboardType="date-time"
            />
            <TextInput
                value={dataAgendamento.paciente}
                onChangeText={updatePaciente}
                style={styles.input}
                placeholder="Paciente"
                secureTextEntry={true}
                keyboardType="default"
                textContentType="paciente"
            />
            <TextInput
                value={dataAgendamento.podologo}
                onChangeText={updatePodologo}
                style={styles.input}
                placeholder="Podologo"
                secureTextEntry={true}
                keyboardType="default"
                textContentType="podologo"
            />
            <TextInput
                value={dataAgendamento.status}
                onChangeText={updateStatus}
                style={styles.input}
                placeholder='Status'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='status'
            />
            <TextInput
                value={dataAgendamento.description}
                onChangeText={updateDescription}
                style={styles.input}
                placeholder='Descrição'
                secureTextEntry={true}
                keyboardType='default'
                textContentType='description'
            />
            <Button
                style={styles.button}
                title="Agendar"
                onPress={() => Agendamento()}
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
