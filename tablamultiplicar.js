const mostrarTabla = (event) => {
  event.preventDefault(); // línea 2, como dice el enunciado
  const numero = Number(document.getElementById('numero').value);
  if (numero >= 0 && numero <= 10) {
    let tabla = document.getElementById('tabla');
    let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;
    tablaMultiplicar += '<table>';

    for (let i = 0; i <= 10; i++) {
      // CAMBIO 2: cada multiplicación va en una fila de la tabla (<tr><td>)
      tablaMultiplicar += `<tr><td>${numero} * ${i} = ${numero * i}</td></tr>`;
    }
    tablaMultiplicar += '</table>';
    tabla.innerHTML = tablaMultiplicar;
  } else {
    alert('El número introducido debe estar entre 0 y 10 (ambos inclusive)');
    document.getElementById('numero').value = '';
  }
};