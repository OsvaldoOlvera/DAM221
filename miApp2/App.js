/*1.- ZONA DE IMPORTACIONES */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*2.- ZONA DE RENDER O MAIN */
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
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
