/*1.- ZONA DE IMPORTACIONES */
import {useState} from 'react';
import { StyleSheet, View, Text, Pressable, Switch } from 'react-native';


/*2.- ZONA DE RENDER O MAIN */
export default function PressableScreen() {
  const [mensaje, setMensaje] = useState('Presiona el boton');
  const [activado, setActivado] = useState('false');
  return (
    <View style={styles.container}>

        <Text style={styles.container}></Text>

          <Text>{mensaje}</Text>

          <Pressable
            onPress = {()=> setMensaje ('Boton Presionado')}
            onPressIn={()=> console.log('Inicio de pulsacion')}
            onPressOut={()=> console.log('Fin de ka pulsacion')}
            onLongPress={()=> setMensaje('Pulsacion Prolongada')}
            disable = {false}
            style={({pressed}) =>[
              styles.boton, 
              pressed && styles.botonPresionado
            ]}
            >
              <Text style={styles.textoBoton}>Presioname</Text>
              </Pressable>

              <View style= {styles.separador}>

                <Text style={styles.titulo}>Switch</Text>

                <Text>
                  Estado : {activado ? 'Activado' : 'Desactivado'}
                </Text>
              </View>

              <Switch
              value={activado}
              onValueChange={setActivado}
              disabled={false}
              trackColor={{false: '#423423', true: '#534534'}}
              thumbColor={activado ? '#ffffff' : '#eeeeee'}
              />

    </View>
    
  );
}

/*3.- ZONA DE ESTILOS Y POSICIONAMIENTO */
  const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b80',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6655',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: {
    height: 2,
    backgroundColor: '#cccccc',
    width: '90%',
    marginVertical: 35,
  }, 

});
