/*1.- ZONA DE IMPORTACIONES */
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatList from './FlatList';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';



/*2.- ZONA DE RENDER O MAIN */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safe':
            return <SafeScreen />;

         case 'activity':
            return <ActivityScreen />;

         case 'flatlist':
            return <FlatList />;

        case 'image':
            return <ImageScreen />;

        case 'modal':
            return <ModalScreen />;

        case 'pressable':
            return <PressableScreen />;

        case 'textinput':
            return <TextInputScreen />;
        
        case 'menu':
            default:
                 return (
                    <View style={styles.container}>
                        <Text> MENÚ DE PRACTICAS </Text>
                        <Button title="Pract:Tarjetas" onPress = {()=> setScreen('tarjetas')}></Button>
                        <Button title="Pract:SafeAreaView" onPress = {()=> setScreen('safe')}></Button>
                        <Button title="Pract:Pressable" onPress = {()=> setScreen('pressable')}></Button>
                        <Button title="Pract:TextInput" onPress = {()=> setScreen('textinput')}></Button>
                        <Button title="Pract:FlatList" onPress = {()=> setScreen('flatlist')}></Button>
                        <Button title="Pract:Image" onPress = {()=> setScreen('image')}></Button>
                        <Button title="Pract:Modal" onPress = {()=> setScreen('modal')}></Button>
                        <Button title="Pract:ActivityIndicator" onPress = {()=> setScreen('activity')}></Button>

                    </View>
                );
     }//SWITCH
}//FUNCIÓN

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
