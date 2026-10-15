/*1.- ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Saludo } from './components/saludo';
import { Saludo2 } from './components/saludo2';
import { Perfil } from './components/perfil';


/*2.- ZONA DE RENDER O MAIN */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <StatusBar style="auto" />
       <Saludo />
            <Saludo />
            <Saludo2 />
            <Perfil />
    </View>
  );
}

/*3.- ZONA DE ESTILOS Y POSICIONAMIENTO */
const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
