/*1.- ZONA DE IMPORTACIONES */
import { StyleSheet, View, Text } from 'react-native';


/*2.- ZONA DE RENDER O MAIN */
export default function ModalScreen() {
  return (
    <View style={styles.container}>

        <Text>Practica 15</Text>
        <Text>Daniela</Text>

    </View>
    
  );
}

/*3.- ZONA DE ESTILOS Y POSICIONAMIENTO */
const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
