/*1.- ZONA DE IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from './components/perfil';


/*2.- ZONA DE RENDER O MAIN */
export default function App() {
  return (
    <View style={styles.container}>

            <Perfil style={styles.tarjeta1} nombre="Osvaldo" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>
            <Perfil style={styles.tarjeta2} nombre="Diego" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>
            <Perfil style={styles.tarjeta3} nombre="José" carrera="TIID" materia="Programación Móvil" cuatri="4° Cuatrimestre"/>

      <StatusBar style="auto" />
    </View>
    
  );
}

/*3.- ZONA DE ESTILOS Y POSICIONAMIENTO */
const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{
    backgroundColor: 'lightblue',
  },
  tarjeta2:{
    backgroundColor: 'lightgreen',
  },
  tarjeta3:{
    backgroundColor: 'lightyellow',
  },

});
