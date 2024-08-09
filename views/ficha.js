import LogoSenac from '../assets/senac-logo.png';
import * as React from 'react';
import { Button, Text, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from 'expo-router';

export default function AnamneseScreen({ navigation }) {
  
  const [dataAnamnese, setDataAnamnese] = React.useState({
      numero: '',
      nome: '',
      endereco: '',
      num: '',
      cidade: '',
      cep: '',
      dataNascimento: '',
      estadoCivil: {
        solteiro: false,
        casado: false,
        viuvo: false,
        demasiado: false,
      },
      telefone: '',
      telefoneRecado: '',
      profissao: '',
      posicaoTrabalho: {
        emPe: false,
        sentado: false,
        andando: false,
      },
      estilista: {
        sim: false,
        nao: false,
        tempo: '',
      },
      tabagista: {
        sim: false,
        nao: false,
        tempo: '',
      },
      tipoCalcado: {
        aberto: false,
        fechado: false,
        numero: '',
      },
      tipoMeia: {
        social: false,
        esportiva: false,
        algodao: false,
      },
      praticaEsporte: {
        sim: false,
        nao: false,
        qual: '',
      },
      habitosAlimentares: '',
      medicamentos: {
        sim: false,
        nao: false,
        quais: '',
      },
      estatura: '',
      peso: '',
      pa: '',
      glicemia: '',
      tipagemSanguinea: '',
      doencasPreExistentes: {
        sim: false,
        nao: false,
        quais: '',
      },
      tratamentoPodologico: {
        sim: false,
        nao: false,
        quais: '',
      },
      cirurgiaMembrosInferiores: {
        sim: false,
        nao: false,
        quais: '',
      },
      alergia: {
        sim: false,
        nao: false,
        quais: '',
      },
      gestante: {
        sim: false,
        nao: false,
      },
      lactante: {
        sim: false,
        nao: false,
      },
      varizes: {
        sim: false,
        nao: false,
      },
      amputacoes: {
        sim: false,
        nao: false,
        quais: '',
      },
      dor: '',
      pinosMarcapasso: {
        sim: false,
        nao: false,
        quais: '',
      },
      perfusao: {
        pd: '',
        pe: '',
      },
      digitoPressao: {
        pd: '',
        pe: '',
      },
      formatoUnhas: {
        pd: '',
        pe: '',
      },
      formatoPes: {
        pd: '',
        pe: '',
      },
      testeMonofilamento: {
        pd: { cs: false, ss: false },
        pe: { cs: false, ss: false },
      },
  });

  function updateNumber(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.numero = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateName(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.nome = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateAddress(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.endereco = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateNumber(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.numero = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateCity(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.cidade = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateZip(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.cep = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatedatebirth(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.datanascimento = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateMaritalstatus(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.estadoCivil = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateTelephone(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.telefone = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatePhonemessage(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.telefone = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateProfession(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.profissao = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateJobposition(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.posicaoTrabalho = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateStylist(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.estilista = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateSmoker(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.tabagista = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateTypefootwear(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.tipocalcado = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateShoenumber(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.numerocalcado = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateTypeSock(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.tipomeia = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatePracticessports(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.praticaesporte = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatewhatsportsdoyoupractice(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.praticaesporte = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateeatinghabits(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.habitosalimentares = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateMedicines(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.medicamentos = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatewhatmedicines(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.quaismedicamentos = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateStature(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.estatura = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateWeight(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.peso = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatePA(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.pa = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodglucose(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.glicemia = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.tipagemsanguinea = value
    setDataAnamnese(newDataAnamnese)
  }

  function updatePreexistingdiseases(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.doencasPreExistentes = value
    setDataAnamnese(newDataAnamnese)
  }

  function lowerlimbsurgery(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.cirurgiaMembrosInferiores = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.cirurgiaMembrosInferiores = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.gestante = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.lactante = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.varizes = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.amputacoes = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.dor = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.pinosMarcapasso = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.perfusao = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.digitoPressao = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.formatoUnhas = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.formatoPes = value
    setDataAnamnese(newDataAnamnese)
  }

  function updateBloodtyping(value) {
    const newDataAnamnese = {
        ...dataAnamnese
    }
    newDataAnamnese.testeMonofilamento = value
    setDataAnamnese(newDataAnamnese)
  }

  async function ficha() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const raw = JSON.stringify(dataAnamnese);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
      const resp = await fetch('https://api-pi-senac.azurewebsites.net/anamnese', requestOptions)
      const bodyResp = await resp.json();
      const token = bodyResp.token;
      SecureStore.setItemAsync('bearer', token);
      navigation.navigate('Home');
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image width={100} height={200} style={{ flex: 1, resizeMode: 'contain' }} source={LogoSenac} />
      <Text style={styles.title}>Anamnese</Text>
      <TextInput
        value={dataAnamnese.numero}
        onChangeText={(value) => updateNumber('numero', value)}
        style={styles.input}
        placeholder='Número'
      />
      <TextInput
        value={dataAnamnese.nome}
        onChangeText={(value) => updateName('nome', value)}
        style={styles.input}
        placeholder='Nome'
      />
      <TextInput
        value={dataAnamnese.endereco}
        onChangeText={(value) => updateAddress('endereco', value)}
        style={styles.input}
        placeholder='Endereço'
      />
      <TextInput
        value={dataAnamnese.num}
        onChangeText={(value) => updateNumber('num', value)}
        style={styles.input}
        placeholder='N.º'
      />
      <TextInput
        value={dataAnamnese.cidade}
        onChangeText={(value) => updateCity('cidade', value)}
        style={styles.input}
        placeholder='Cidade'
      />
      <TextInput
        value={dataAnamnese.cep}
        onChangeText={(value) => updateZip('cep', value)}
        style={styles.input}
        placeholder='CEP'
      />
      <TextInput
        value={dataAnamnese.dataNascimento}
        onChangeText={(value) => updatedatebirth('dataNascimento', value)}
        style={styles.input}
        placeholder='Data de Nascimento'
      />
      <TextInput
        value={dataAnamnese.estadoCivil.solteiro ? 'Solteiro' : dataAnamnese.estadoCivil.casado ? 'Casado' : dataAnamnese.estadoCivil.viuvo ? 'Viúvo' : dataAnamnese.estadoCivil.demasiado ? 'Demasiado' : ''}
        onChangeText={(value) => updateMaritalstatus('estadoCivil', { ...dataAnamnese.estadoCivil, solteiro: value === 'Solteiro', casado: value === 'Casado', viuvo: value === 'Viúvo', demasiado: value === 'Demasiado' })}
        style={styles.input}
        placeholder='Estado Civil'
      />
      <TextInput
        value={dataAnamnese.telefone}
        onChangeText={(value) => updateTelephone('telefone', value)}
        style={styles.input}
        placeholder='Telefone'
      />
      <TextInput
        value={dataAnamnese.telefoneRecado}
        onChangeText={(value) => updatePhonemessage('telefoneRecado', value)}
        style={styles.input}
        placeholder='Telefone para Recado'
      />
      <TextInput
        value={dataAnamnese.profissao}
        onChangeText={(value) => updateProfession('profissao', value)}
        style={styles.input}
        placeholder='Profissão'
      />
      <TextInput
        value={dataAnamnese.posicaoTrabalho.emPe ? 'Em Pé' : dataAnamnese.posicaoTrabalho.sentado ? 'Sentado' : dataAnamnese.posicaoTrabalho.andando ? 'Andando' : ''}
        onChangeText={(value) => updateJobposition('posicaoTrabalho', { ...dataAnamnese.posicaoTrabalho, emPe: value === 'Em Pé', sentado: value === 'Sentado', andando: value === 'Andando' })}
        style={styles.input}
        placeholder='Posição de Trabalho'
      />
      <TextInput
        value={dataAnamnese.estilista.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateStylist('estilista', { ...dataAnamnese.estilista, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Estilista'
      />
      <TextInput
        value={dataAnamnese.estilista.tempo}
        onChangeText={(value) => updateField('estilista', { ...dataAnamnese.estilista, tempo: value })}
        style={styles.input}
        placeholder='Tempo de Estilista'
      />
      <TextInput
        value={dataAnamnese.tabagista.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateSmoker('tabagista', { ...dataAnamnese.tabagista, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Tabagista'
      />
      <TextInput
        value={dataAnamnese.tabagista.tempo}
        onChangeText={(value) => updateField('tabagista', { ...dataAnamnese.tabagista, tempo: value })}
        style={styles.input}
        placeholder='Tempo de Tabagismo'
      />
      <TextInput
        value={dataAnamnese.tipoCalcado.aberto ? 'Aberto' : 'Fechado'}
        onChangeText={(value) => updateTypefootwear('tipoCalcado', { ...dataAnamnese.tipoCalcado, aberto: value === 'Aberto', fechado: value === 'Fechado' })}
        style={styles.input}
        placeholder='Tipo de Calçado'
      />
      <TextInput
        value={dataAnamnese.numerocalcado.numero}
        onChangeText={(value) => updateShoenumber('tipoCalcado', { ...dataAnamnese.tipoCalcado, numero: value })}
        style={styles.input}
        placeholder='Número do Calçado'
      />
      <TextInput
        value={dataAnamnese.tipoMeia.social ? 'Social' : dataAnamnese.tipoMeia.esportiva ? 'Esportiva' : dataAnamnese.tipoMeia.algodao ? 'Algodão' : ''}
        onChangeText={(value) => updateTypeSock('tipoMeia', { ...dataAnamnese.tipoMeia, social: value === 'Social', esportiva: value === 'Esportiva', algodao: value === 'Algodão' })}
        style={styles.input}
        placeholder='Tipo de Meia'
      />
      <TextInput
        value={dataAnamnese.praticaEsporte.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updatePracticessports('praticaEsporte', { ...dataAnamnese.praticaEsporte, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Pratica Esporte?'
      />
      <TextInput
        value={dataAnamnese.praticaEsporte.qual}
        onChangeText={(value) => updatewhatsportsdoyoupractice('praticaEsporte', { ...dataAnamnese.praticaEsporte, qual: value })}
        style={styles.input}
        placeholder='Qual esporte?'
      />
      <TextInput
        value={dataAnamnese.habitosAlimentares}
        onChangeText={(value) => updateeatinghabits('habitosAlimentares', value)}
        style={styles.input}
        placeholder='Hábitos Alimentares'
      />
      <TextInput
        value={dataAnamnese.medicamentos.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateMedicines('medicamentos', { ...dataAnamnese.medicamentos, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Usa Medicamentos?'
      />
      <TextInput
        value={dataAnamnese.medicamentos.quais}
        onChangeText={(value) => updatewhatmedicines('medicamentos', { ...dataAnamnese.medicamentos, quais: value })}
        style={styles.input}
        placeholder='Quais Medicamentos'
      />
      <TextInput
        value={dataAnamnese.estatura}
        onChangeText={(value) => updateStature('estatura', value)}
        style={styles.input}
        placeholder='Estatura'
      />
      <TextInput
        value={dataAnamnese.peso}
        onChangeText={(value) => updateWeight('peso', value)}
        style={styles.input}
        placeholder='Peso'
      />
      <TextInput
        value={dataAnamnese.pa}
        onChangeText={(value) => updatePA('pa', value)}
        style={styles.input}
        placeholder='PA'
      />
      <TextInput
        value={dataAnamnese.glicemia}
        onChangeText={(value) => updateBloodglucose('glicemia', value)}
        style={styles.input}
        placeholder='Glicemia'
      />
      <TextInput
        value={dataAnamnese.tipagemSanguinea}
        onChangeText={(value) => updateBloodtyping('tipagemSanguinea', value)}
        style={styles.input}
        placeholder='Tipagem Sanguínea'
      />
      <TextInput
        value={dataAnamnese.doencasPreExistentes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updatePreexistingdiseases('doencasPreExistentes', { ...dataAnamnese.doencasPreExistentes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Doenças Preexistentes'
      />
      <TextInput
        value={dataAnamnese.doencasPreExistentes.quais}
        onChangeText={(value) => updateField('doencasPreExistentes', { ...dataAnamnese.doencasPreExistentes, quais: value })}
        style={styles.input}
        placeholder='Quais Doenças'
      />
      <TextInput
        value={dataAnamnese.tratamentoPodologico.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('tratamentoPodologico', { ...dataAnamnese.tratamentoPodologico, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Tratamento Podológico'
      />
      <TextInput
        value={dataAnamnese.tratamentoPodologico.quais}
        onChangeText={(value) => updateField('tratamentoPodologico', { ...dataAnamnese.tratamentoPodologico, quais: value })}
        style={styles.input}
        placeholder='Quais Tratamentos'
      />
      <TextInput
        value={dataAnamnese.cirurgiaMembrosInferiores.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('cirurgiaMembrosInferiores', { ...dataAnamnese.cirurgiaMembrosInferiores, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Cirurgia Membros Inferiores'
      />
      <TextInput
        value={dataAnamnese.cirurgiaMembrosInferiores.quais}
        onChangeText={(value) => updateField('cirurgiaMembrosInferiores', { ...dataAnamnese.cirurgiaMembrosInferiores, quais: value })}
        style={styles.input}
        placeholder='Quais Cirurgias'
      />
      <TextInput
        value={dataAnamnese.alergia.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('alergia', { ...dataAnamnese.alergia, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Alergias'
      />
      <TextInput
        value={dataAnamnese.alergia.quais}
        onChangeText={(value) => updateField('alergia', { ...dataAnamnese.alergia, quais: value })}
        style={styles.input}
        placeholder='Quais Alergias'
      />
      <TextInput
        value={dataAnamnese.gestante.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('gestante', { ...dataAnamnese.gestante, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Gestante'
      />
      <TextInput
        value={dataAnamnese.lactante.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('lactante', { ...dataAnamnese.lactante, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Lactante'
      />
      <TextInput
        value={dataAnamnese.varizes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('varizes', { ...dataAnamnese.varizes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Varizes'
      />
      <TextInput
        value={dataAnamnese.amputacoes.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('amputacoes', { ...dataAnamnese.amputacoes, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Amputações'
      />
      <TextInput
        value={dataAnamnese.amputacoes.quais}
        onChangeText={(value) => updateField('amputacoes', { ...dataAnamnese.amputacoes, quais: value })}
        style={styles.input}
        placeholder='Quais Amputações'
      />
      <TextInput
        value={dataAnamnese.dor}
        onChangeText={(value) => updateField('dor', value)}
        style={styles.input}
        placeholder='Dor'
      />
      <TextInput
        value={dataAnamnese.pinosMarcapasso.sim ? 'Sim' : 'Não'}
        onChangeText={(value) => updateField('pinosMarcapasso', { ...dataAnamnese.pinosMarcapasso, sim: value === 'Sim', nao: value === 'Não' })}
        style={styles.input}
        placeholder='Pinos ou Marcapasso'
      />
      <TextInput
        value={dataAnamnese.pinosMarcapasso.quais}
        onChangeText={(value) => updateField('pinosMarcapasso', { ...dataAnamnese.pinosMarcapasso, quais: value })}
        style={styles.input}
        placeholder='Quais Pinos ou Marcapasso'
      />
      <TextInput
        value={dataAnamnese.perfusao.pd}
        onChangeText={(value) => updateField('perfusao', { ...dataAnamnese.perfusao, pd: value })}
        style={styles.input}
        placeholder='Perfusão PD'
      />
      <TextInput
        value={dataAnamnese.perfusao.pe}
        onChangeText={(value) => updateField('perfusao', { ...dataAnamnese.perfusao, pe: value })}
        style={styles.input}
        placeholder='Perfusão PE'
      />
      <TextInput
        value={dataAnamnese.digitoPressao.pd}
        onChangeText={(value) => updateField('digitoPressao', { ...dataAnamnese.digitoPressao, pd: value })}
        style={styles.input}
        placeholder='Dígito Pressão PD'
      />
      <TextInput
        value={dataAnamnese.digitoPressao.pe}
        onChangeText={(value) => updateField('digitoPressao', { ...dataAnamnese.digitoPressao, pe: value })}
        style={styles.input}
        placeholder='Dígito Pressão PE'
      />
      <TextInput
        value={dataAnamnese.formatoUnhas.pd}
        onChangeText={(value) => updateField('formatoUnhas', { ...dataAnamnese.formatoUnhas, pd: value })}
        style={styles.input}
        placeholder='Formato das Unhas PD'
      />
      <TextInput
        value={dataAnamnese.formatoUnhas.pe}
        onChangeText={(value) => updateField('formatoUnhas', { ...dataAnamnese.formatoUnhas, pe: value })}
        style={styles.input}
        placeholder='Formato das Unhas PE'
      />
      <TextInput
        value={dataAnamnese.formatoPes.pd}
        onChangeText={(value) => updateField('formatoPes', { ...dataAnamnese.formatoPes, pd: value })}
        style={styles.input}
        placeholder='Formato dos Pés PD'
      />
      <TextInput
        value={dataAnamnese.formatoPes.pe}
        onChangeText={(value) => updateField('formatoPes', { ...dataAnamnese.formatoPes, pe: value })}
        style={styles.input}
        placeholder='Formato dos Pés PE'
      />
      <TextInput
        value={dataAnamnese.testeMonofilamento.pd.cs ? 'CS' : 'SS'}
        onChangeText={(value) => updateField('testeMonofilamento', { ...dataAnamnese.testeMonofilamento, pd: { cs: value === 'CS', ss: value === 'SS' } })}
        style={styles.input}
        placeholder='Teste Monofilamento PD'
      />
      <TextInput
        value={dataAnamnese.testeMonofilamento.pe.cs ? 'CS' : 'SS'}
        onChangeText={(value) => updateField('testeMonofilamento', { ...dataAnamnese.testeMonofilamento, pe: { cs: value === 'CS', ss: value === 'SS' } })}
        style={styles.input}
        placeholder='Teste Monofilamento PE'
      />
      <Button
        style={styles.button}
        title="Salvar"
        onPress={() => logar()}
      />
      <Button
        style={styles.button}
        title="Cancelar"
        onPress={() => logar()}
      />
    </ScrollView>
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
    marginBottom: 20,
  },
  button: {
    flex: 1,
    fontSize: 20,
    width: '100%',
    marginVertical: 10,
  },
});
