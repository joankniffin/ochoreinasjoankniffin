function colocarReina(celda){
    /*alert("Le dieron click a la celda"+celda);*/
    
    if (window.getComputedStyle(celda).backgroundImage == "none") {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
    } else {
      celda.style = "background-image: none";
    }
}