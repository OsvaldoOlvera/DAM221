import {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ImageBackground, Pressable, TextInput,  ActivityIndicator, FlatList, Alert} from 'react-native';

export default function RegistroScreen() {

    const [cargando, setCargando] = useState(true);

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [libros, setLibros] = useState([]);
    const [guardando, setGuardando] = useState(false);


    useEffect(() => {
        const temporizador = setTimeout(() => {
            setCargando(false);
        }, 2000);
        return () => clearTimeaout(temporizador);
    }, []);

    const agregarLibros = () => {
        if (
            titulo.trim() === '' ||
            autor.trim() === '' ||
            genero.trim() === ''
        ) {
            Alert.alert(
                'ERROR',
                'Rellena todos los campos'
            );
            return; 
        }

        if (guardando) return;

        setGuardando(true);

        const nuevoLibro = {
            id: Date.now().toString(),
            titulo: titulo.trim(),
            autor: autor.trim(),
            genero: genero.trim()
        };

        setTimeout(() => {
            setLibros(actuales => [...actuales, nuevoLibro]);
            setTitulo('');
            setAutor('');
            setGenero('');
            setGuardando(false);

            Alert.alert(
                'REGISTRO EXITOSO',
                'El libro se agrego correctamente'
            );
        }, 4000);
    };

     if (cargando) {
    return (
      <View style={styles.splash}>

        <Text style={styles.tituloSplash}>
          Bienvenido
        </Text>

        <Text style={styles.subtituloSplash}>
          Registro de Libros Leidos
        </Text>

        <ActivityIndicator
          size="large"
          color="#ffffff"
        />

      </View>
    );
  }

  // Pantalla principal
  return (
    <ImageBackground
      source={require('../assets/fondo.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >

      <View style={styles.capa}>

        <Text style={styles.tituloPrincipal}>
          Registro de Libros Leidos
        </Text>

        <View style={styles.formulario}>

          <Text style={styles.etiqueta}>
            Titulo del libro
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe el titulo"
            value={titulo}
            onChangeText={setTitulo}
            editable={!guardando}
          />

          <Text style={styles.etiqueta}>
            Autor
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe el autor"
            value={autor}
            onChangeText={setAutor}
            editable={!guardando}
          />

          <Text style={styles.etiqueta}>
            Genero
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe el genero"
            value={genero}
            onChangeText={setGenero}
            editable={!guardando}
          />

          <Pressable
            onPress={agregarLibros}
            disabled={guardando}
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
              guardando && styles.botonDeshabilitado
            ]}
          >
            <Text style={styles.textoBoton}>
              Agregar libro
            </Text>
          </Pressable>

          {guardando && (
            <View style={styles.cargandoLibro}>

              <ActivityIndicator
                size="large"
                color="#294936"
              />

              <Text>Guardando libro...</Text>

            </View>
          )}

        </View>

        <Text style={styles.subtitulo}>
          Mis libros favoritos
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          style={styles.lista}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            <Text style={styles.vacio}>
              Aun no hay libros registrados.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>

              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>

              <Text>
                Autor: {item.autor}
              </Text>

              <Text>
                Genero: {item.genero}
              </Text>

            </View>
          )}
        />

      </View>

    </ImageBackground>
  );
}


/*3.- ZONA DE ESTILOS Y POSICIONAMIENTO */
const styles = StyleSheet.create({

  // SplashScreen
  splash: {
    flex: 1,
    backgroundColor: '#294936',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloSplash: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },

  subtituloSplash: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 25,
  },

  // Fondo principal
  fondo: {
    flex: 1,
  },

  capa: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    padding: 20,
    paddingTop: 55,
  },

  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 25,
  },

  // Formulario
  formulario: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
  },

  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#294936',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
  },

  // Boton Pressable
  boton: {
    backgroundColor: '#294936',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  botonPresionado: {
    backgroundColor: '#172e20',
  },

  botonDeshabilitado: {
    opacity: 0.6,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ActivityIndicator
  cargandoLibro: {
    marginTop: 15,
    alignItems: 'center',
    gap: 8,
  },

  // FlatList
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 25,
    marginBottom: 15,
  },

  lista: {
    flex: 1,
  },

  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#294936',
    marginBottom: 5,
  },

  vacio: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },



});