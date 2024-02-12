var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {

  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      var tablero = document.getElementById("tabla");
      alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor = 'red';
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor = 'red';
        }
      }

      // Positive slope diagonal
      for (let i = renglon - 1, j = columna - 1; i >= 0 && j >= 0; i--, j--) {
        tablero.rows[i].cells[j].removeAttribute("onclick");
        tablero.rows[i].cells[j].style.backgroundColor = 'red';
      }
      for (let i = renglon + 1, j = columna + 1; i < 8 && j < 8; i++, j++) {
        tablero.rows[i].cells[j].removeAttribute("onclick");
        tablero.rows[i].cells[j].style.backgroundColor = 'red';
      }

      // Negative slope diagonal
      for (let i = renglon - 1, j = columna + 1; i >= 0 && j < 8; i--, j++) {
        tablero.rows[i].cells[j].removeAttribute("onclick");
        tablero.rows[i].cells[j].style.backgroundColor = 'red';
      }
      for (let i = renglon + 1, j = columna - 1; i < 8 && j >= 0; i++, j--) {
        tablero.rows[i].cells[j].removeAttribute("onclick");
        tablero.rows[i].cells[j].style.backgroundColor = 'red';
      }

      reinasPorColocar--;
      reinasColocadas++;
    }
  } else {
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    var tablero = document.getElementById("tabla");
    alert(renglon + " " + columna);
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
    }
    reinasPorColocar++;
    reinasColocadas--;
  }
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}

function resetBoard() {
  var tablero = document.getElementById("tabla");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      var cell = tablero.rows[i].cells[j];
      cell.style.backgroundColor = ""; 
      cell.style.backgroundImage = "none"; 
      cell.innerHTML = ""; 
      cell.setAttribute("onclick", "colocarReina(this)"); 
    }
  }
  reinasPorColocar = 8;
  reinasColocadas = 0;
}

document.getElementById("restartGame").addEventListener("click", resetBoard);
