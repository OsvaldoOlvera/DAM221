// Guardar información
export function guardarDatos(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos));
}

// Recuperar información
export function obtenerDatos(clave) {
  const datos = localStorage.getItem(clave);

  return datos ? JSON.parse(datos) : [];
}

// Eliminar información
export function eliminarDatos(clave) {
  localStorage.removeItem(clave);
}