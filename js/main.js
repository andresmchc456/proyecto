// Función para cargar módulos HTML en un contenedor
async function cargarModulo(url, contenedorId) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(contenedorId).innerHTML = html;
}

// Función de autenticación sencilla
function autenticar(usuario, clave) {
  return usuario === 'admin' && clave === '1234';
}

// ---------------------------
// Inicializar vista login
// ---------------------------
document.getElementById('home').innerHTML = '';
document.getElementById('barraNavegacion').innerHTML = '';
document.getElementById('paginador').innerHTML = '';

// Cargar login y logo (solo visibles en login)
cargarModulo('vistas/login.html', 'home');
cargarModulo('inc/barrraLogo.html', 'barraLogo');

// Nota: No cargamos el footer al inicio, para que no aparezca en login

// ---------------------------
// Escuchar submit del login
// ---------------------------
document.addEventListener('submit', function(e) {
  if (e.target && e.target.id === 'formLogin') {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    if (autenticar(usuario, clave)) {
      document.getElementById('loginError').style.display = 'none';

      // Cargar módulos principales después del login
      cargarModulo('inc/barraNavegacion.html', 'barraNavegacion');
      cargarModulo('vistas/home.html', 'home');
      cargarModulo('vistas/saludo.html', 'saludo');
      cargarModulo('vistas/paginador.html', 'paginador');

      // Cargar footer solo después del login
      cargarModulo('inc/footer.html', 'footerContainer');
    } else {
      document.getElementById('loginError').style.display = 'block';
    }
  }
});
