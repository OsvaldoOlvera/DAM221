import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {

    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[styles.tarjetas, style]}>
            <Text style={styles.nombre}>{nombre}</Text>

            {mostrar &&
            <>  
            <Text style={styles.carrera}>{carrera}</Text>
            <Text style={styles.otrotexto}>{materia}</Text>
            <Text style={styles.otrotexto}>{cuatri}</Text>
            </>
        }
        <Button title= "Ver Perfil" onPress={ ()=>  setMostrar(!mostrar) }/> 
        </View>
        
    );

}

const styles = StyleSheet.create({
    nombre:{
        fontSize: 24, 
        fontWeight: 600,
        textTransform: 'uppercase',
    },
    carrera:{
        fontSize: 20,
        color: 'blue',
        fontFamily: 'Roboto',

    },
    otrotexto:{
        fontSize: 18,
        color: 'purple',
        fontFamily: 'Courier',
        fontStyle: 'italic',
        
    },
    tarjetas:{
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
   
});
