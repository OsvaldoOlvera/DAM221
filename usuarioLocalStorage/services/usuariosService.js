import {guardarDatos, obtenerDatos, eliminarDatos} from '../storage/localStorage';

const CLAVE = 'usuarios';

// Validar los datos
export function validarUsuario(nombre, edad) {

  if (nombre.trim() === '' || edad.trim() === '') {
    return 'Todos los campos son obligatorios';
  }

  if (!/^\d+$/.test(edad) || Number(edad) <= 0) {
    return 'Ingresa una edad válida';
  }

  return '';
}

// Consultar usuarios
export function consultarUsuarios() {
  return obtenerDatos(CLAVE);
}

// Agregar usuario
export function agregarUsuario(nombre, edad) {

  const error = validarUsuario(nombre, edad);

  if (error) {
    throw new Error(error);
  }

  const usuarios = consultarUsuarios();

  const nuevoUsuario = {
    id: Date.now().toString(),
    nombre: nombre.trim(),
    edad: edad
  };

  usuarios.push(nuevoUsuario);

  guardarDatos(CLAVE, usuarios);
}

// Actualizar usuario
export function actualizarUsuario(id, nombre, edad) {

  const error = validarUsuario(nombre, edad);

  if (error) {
    throw new Error(error);
  }

  const usuarios = consultarUsuarios();

  if (!usuarios.some(usuario => usuario.id === id)) {
    throw new Error('Usuario no encontrado');
  }

  const usuariosActualizados = usuarios.map(usuario =>
    usuario.id === id
      ? { ...usuario, nombre: nombre.trim(), edad }
      : usuario
  );

  guardarDatos(CLAVE, usuariosActualizados);
}

// Eliminar usuario
export function eliminarUsuario(id) {

  const usuarios = consultarUsuarios();

  const usuariosActualizados = usuarios.filter(
    usuario => usuario.id !== id
  );

  if (usuariosActualizados.length === 0) {
    eliminarDatos(CLAVE);
  } else {
    guardarDatos(CLAVE, usuariosActualizados);
  }
}