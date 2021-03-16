function kaanna() {
  var haettuTeksti = document.getElementById('teksti').value;
  var sananPituus = haettuTeksti.length;
  var uusiSana= '';
  for (var i = sananPituus-1;i >= 0; i--) {
    uusiSana += haettuTeksti[i];
  }
document.getElementById('vastaus').innerHTML = uusiSana;
}
