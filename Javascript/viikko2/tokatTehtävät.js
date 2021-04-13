//ensimmäinen tehtävä testaa onko syötetty luku negatiivinen vai positiivinen
function posi() {
  var luku = parseInt(document.getElementById('luku').value);
  if( luku > 0) {
    alert("Luku on positiivinen");
  } else if (luku < 0 ){
    alert("Luku on negatiivinen");
  } else if (luku == 0) {
      alert("Luku on nolla");
    }
}
//toinen tehtävä palautaa syötettyä lukua vastaavan viikonpäivän
function paivat () {
  var paiva = document.getElementById('paiva').value;
  switch (paiva) {
    case '1':
      alert('maanantai');
      break;
    case '2':
      alert('tiistai');
      break;
    case '3':
      alert('keskiviikko');
      break;
    case '4':
      alert('torstai');
      break;
    case '5':
      alert('perjantai');
      break;
    case '6':
      alert('lauantai');
      break;
    case '7':
      alert('sunnuntai');
      break;
    default:
      alert('Anna luku 1-7 väliltä!');
  }
}
// kolmas tehtävä selvittää onko syötetty vuosi karkausvuosi
function vuosi () {
  var vuosiluku = parseInt(document.getElementById('vuosi').value);
  if (vuosiluku % 4 == 0 && vuosiluku % 100 !== 0) {
    alert("Vuosi on karkausvuosi");
  } else if (vuosiluku % 400 == 0) {
    alert('Vuosi on karkausvuosi');
  } else {
    alert('Vuosi ei ole karkausvuosi');
  }
}
//neljäs tehtävä laskee syötetyn luvun summan ja keskiarvon
function summa() {
  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);

  var summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var keskiarvo = summa/5;
  alert('lukujen summa on ' + summa + ' ja keskiarvo on: ' + keskiarvo);
}
//viides tehtävä jossa tulostetaan syötetyn luvun kertotaulu
function kertotaulu() {
  var luku = parseInt(document.getElementById('numero').value);
  var lause= "";
  for (i = 1; i <= 10; i++) {
   lause += i + " kertaa " + luku + " on " + i * luku + "\n";
}
  alert(lause);
}
