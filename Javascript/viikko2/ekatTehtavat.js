//Tehtävä 1: järjestä kolme syötettyä lukua suuruusjärjestykseen
function jarjesta() {
  var luku1 = document.getElementById('eka').value;
  var luku2= document.getElementById('toka').value;
  var luku3 = document.getElementById('kolmas').value;
  if(luku1 < luku2 && luku1 < luku3) {
    if(luku2 < luku3) {
      alert("Lukujen järjestys: " + luku1 + " " + luku2 + " " + luku3);
    } else {
      alert("Lukujen järjestys: " +luku1 + " " + luku3 + " " + luku2);
    }
  } else if(luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku3) {
      alert("Lukujen järjestys: " + luku2 + " " + luku1 + " " + luku3);
    } else {
      alert("Lukujen järjestys: " + luku2 + " " + luku3 + " " + luku1);
    }
  } else if (luku3 < luku1 && luku3 < luku2) {
    if (luku1 < luku2) {
      alert("Lukujen järjestys: " + luku3 + " " + luku1 + " " + luku2);
    } else {
      alert("Lukujen järjestys: " + luku3 + " " + luku2 + " " + luku1);
    }
  }
}
//Tehtävä 2: etsi viidestä syötetystä luvusta suurin
function suurin() {
  var l1 = document.getElementById('2eka').value;
  var l2 = document.getElementById('2toka').value;
  var l3 = document.getElementById('2kolmas').value;
  var l4 = document.getElementById('2neljäs').value;
  var l5 = document.getElementById('2viides').value;
  var array = [l1,l2,l3,l4,l5];
  array.sort();
  alert(array[4]);
}
//Tehtävä 3: selvitä, onko syötetty luku parillinen vai pariton
function parillinen() {
  var luku = document.getElementById('luku').value;
  if (luku % 2 == 0) {
    alert("Luku on parillinen!");
  } else {
    alert("Luku on pariton!");
  }
}
//Tehtävä 4: vastaanota käyttäjältä ikä, ja kerro
//mitä ajoveuvoa käyttäjä saa ajaa
function tarkastaIka() {
  var ika = document.getElementById('ikä').value;
  if (ika < 16) {
    alert("Saat ajaa polkupyörää!");
  } else if (ika < 18) {
    alert("Saat ajaa mopoa!");
  } else {
    alert("Saat ajaa autoa!");
  }
}
//Tehtävä 5: Käännä lause valitulle kielelle
function helloWorld() {
  var lang = document.getElementById('kieli').value;
  switch (lang) {
    case 'eng':
      alert("Hello world!");
      break;
    case 'swe':
      alert("Hejsan världen!");
      break;
    case 'jp':
      alert("Konnichiwa sekai!");
      break;
  }
}
