// Función para cargar módulos HTML en un contenedor
async function cargarModulo(url, contenedorId) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(contenedorId).innerHTML = html;
}

// Llamadas para cargar los módulos
// Cargar el módulo hola.html en el contenedor con id ''
cargarModulo('vistas/home.html', 'home');
cargarModulo('inc/barraNavegacion.html', 'barraNavegacion');
cargarModulo('vistas/saludo.html', 'saludo');