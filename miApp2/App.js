/*1.- ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from './components/perfil';


/*2.- ZONA DE RENDER O MAIN */
export default function App() {
  return (
    <View style={styles.container}>

            <Perfil nombre="Osvaldo" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>
            <Perfil nombre="Diego" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>
            <Perfil nombre="José" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>

      <StatusBar style="auto" />
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
