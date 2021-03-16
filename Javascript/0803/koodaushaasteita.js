//1. haaste
function laskeYhteen (a,b) {
  return a + b;
}
//laskeYhteen(2,3);
//2. haaste
var taulukko = [22,33,44];
function tulostaEkaArvo () {
  console.log(taulukko[0]);
}
//tulostaEkaArvo();
//3. haaste
function summanArvo (a,b) {
  var summa = a + b;
  if (summa < 100) {
    return "Lukujen summa on alle 100";
  }
  else {
    return "Luvut ovat liian suuria minun laskettaviksi";
  }
}
//summanArvo (40,20);
//4. haaste
function samatLuvut (a,b) {
  if (a == b) {
    console.log("Samat");
  }
  else {
    console.log("Eri luvut!");
  }
}
//samatLuvut(5,6);
//5. haaste
function muutaSekunneiksi (a,b,c) {
  var tunnit = a * 3600;
  var minuutit = b * 60;
  return tunnit + minuutit + c;
}
//muutaSekunneiksi(10,10,10);
//6.haaste
function syntymapaivaLaskuri (a,b,c) {
  function vuodet (c) {
    return c * 365.25;
  }
  function muutaKuukaudet (b) {
    switch (b-1) {
      case 0:
      return 0;
      break;
    case 1:
      return 31;
      break;
    case 2:
      return 59;
      break;
    case 3:
      return 90;
      break;
    case 4:
      return 120;
      break;
    case 5:
      return 151;
      break;
    case 6:
      return 181;
      break;
    case 7:
      return 212;
      break;
    case 8:
      return 243;
      break;
    case 9:
      return 273;
      break;
    case 10:
      return 304;
      break;
    case 11:
      return 334;
      break;
    default:
      return 0;
    }
  }
  var syntymaaika = vuodet(c) + muutaKuukaudet(b) + a;
  var nyt = vuodet(2021) + muutaKuukaudet(3) + 9;
  console.log(nyt - syntymaaika);
}
syntymapaivaLaskuri(23,7,1965);
