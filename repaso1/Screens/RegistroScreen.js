import React, { useState } from 'react';
import {View, Text, TextInput, Switch, Button, Alert, ScrollView, StyleSheet} from 'react-native';

export default function RegistroScreen() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [actDeportivas, setActDeportivas] = useState(false);

    const enviarRegistro = () => {

        if(
            nombre.trim() === '' ||
            carrera.trim() === '' ||
            semestre.trim() === ''
        ){
            Alert.alert(
                'Campos incompletos',
                'Rellena todos los campos'
            );
            return;
        }

        if (!/^\d+$/.test(semestre.trim())) {
            Alert.alert(
                'ERROR',
                'Ingresa solo números en el semestre'
            );
            return;
        }

        Alert.alert(
            'Registro exitoso',
            `Nombre: ${nombre}
            Carerra: ${carrera}
            Semestre: ${semestre}
            Taller: ${taller ? 'Sí' : 'No'}
            Constancia: ${constancia ? 'Sí' : 'No'}
            ActDeportivas: ${actDeportivas ? 'Sí' : 'No'}`
        );

    };

    return (
        <ScrollView contentContainerStyle={styles.contenedor}>
            
            <Text style={styles.titulo}>Registro de Evento Universitario</Text>

            <TextInput 
            style={styles.input}
            placeholder= 'Nombre Completo'
            value={nombre}
            onChangeText={setNombre}
            />

            <TextInput
            style={styles.input}
            placeholder= 'Carrera'
            value={carrera}
            onChangeText={setCarrera}
            />

            <TextInput
            style={styles.input}
            placeholder= 'Semestre'
            value={semestre}
            onChangeText={setSemestre}
            keyboardType='numeric'
            />

            <Text style={styles.subtitulo}>Opciones</Text>

            <View style={styles.fila}>
                <Text>¿Asistirá al taller?</Text>
                <Switch
                value={taller}
                onValueChange={setTaller}
                />
            </View>

            <View style={styles.fila}>
                <Text>¿Requiere constancia?</Text>
                <Switch 
                value={constancia}
                onValueChange={setConstancia}
                />
            </View>

            <View style={styles.fila}>
                <Text>¿Participara en deportes?</Text>
                <Switch
                value={actDeportivas}
                onValueChange={setActDeportivas}
                />
            </View>

            <View style={styles.boton}>
                <Button
                title='Enviar Registro'
                onPress={enviarRegistro}
                />
            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: '#ffffff'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  input: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  boton: {
    marginTop: 25
  }

});