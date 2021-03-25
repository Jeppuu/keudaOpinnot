//ensimmäinen tehtävä testaa onko syötetty luku negatiivinen vai positiivinen
function posi() {
  var luku = document.getElementById('luku').value;
  if( luku >= 0) {
    console.log("luku on positiivinen");
  } else {
    console.log("luku on negatiivinen");
  }
}
//toinen tehtävä palautaa syötettyä lukua vastaavan viikonpäivän
function paivat () {
  var paiva = document.getElementById('paiva').value;
  switch (paiva) {
    case '1':
      console.log('maanantai');
      break;
    case '2':
      console.log('tiistai');
      break;
    case '3':
      console.log('keskiviikko');
      break;
    case '4':
      console.log('torstai');
      break;
    case '5':
      console.log('perjantai');
      break;
    case '6':
      console.log('lauantai');
      break;
    case '7':
      console.log('sunnuntai');
      break;
    default:
      console.log('Anna luku 1-7 väliltä!');
  }
}
// kolmas tehtävä selvittää onko syötetty vuosi karkausvuosi
function vuosi () {
  var vuosiluku = document.getElementById('vuosi').value;
  if (vuosiluku % 4 == 0 && vuosiluku % 100 !== 0) {
    console.log("Vuosi on karkausvuosi");
  } else if (vuosiluku % 400 == 0) {
    console.log('Vuosi on karkausvuosi');
  } else {
    console.log('Vuosi ei ole karkausvuosi');
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
  console.log('lukujen summa on ' + summa + ' ja keskiarvo on: ' + keskiarvo);
}
//viides tehtävä jossa tulostetaan syötetyn luvun kertotaulu
function kertotaulu() {
  var luku = document.getElementById('numero').value;
  var lause= "";
  for (i = 1; i <= 10; i++) {
   lause += i + " kertaa " + luku + " on " + i * luku + "\n";
}
  console.log(lause);
}
