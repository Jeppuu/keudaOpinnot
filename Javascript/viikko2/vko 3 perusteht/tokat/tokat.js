function scrabble() {
  let pisteet = 0;
  let sana = document.getElementById('scrabble').value;
  for (var i = 0; i < sana.length; i++) {
    switch (sana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
      break;
      case 'o':
      case 'O':
      case 'ä':
      case 'Ä':
      case 'k':
      case 'K':
      case 's':
      case 'S':
        pisteet+=2;
      break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pisteet+=3;
      break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pisteet+=4;
      break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
        pisteet+=7;
      break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pisteet+=8;
      break;
      case 'c':
      case 'C':
        pisteet+=10;
      break;
      default:
        pisteet+=12;
    }
    document.getElementById('vastaus1').innerHTML =
    '<p>' + 'sait ' + pisteet + ' pistettä sanasta ' + sana +'!';
  }
}

function lotto() {
  var n1 = Math.floor(Math.random() * 100);
  var n2 = Math.floor(Math.random() * 100);
  var n3 = Math.floor(Math.random() * 100);
  var n4 = Math.floor(Math.random() * 100);
  var n5 = Math.floor(Math.random() * 100);
  var n6 = Math.floor(Math.random() * 100);
  var n7 = Math.floor(Math.random() * 100);
  document.getElementById('vastaus2')
  .innerHTML = n1 + ', ' + n2 + ', ' + n3+ ', ' + n4+ ', ' + n5+ ', ' + n6+ ', ' + n7;
}

function taulukko() {
  //en saa tätä toimimaan! TypeError: undefined is not an object (evaluating 'arr[i].length')
  var arr = [[3,5,6,8],[56,34,91,27],[4,9,12,14,][67,90,83,59],[45,65,82,34]];
  var taulukko = '<table border="1">';
  for (var i = 0; i < arr.length; i++) {
    taulukko += '<tr>';
    for(var j = 0; j < arr[i].length; j++) {
      taulukko += '<td>' + arr[i][j] + '</td>';
    }
    taulukko += '</tr>';
  }
  taulukko += '</table>';
  document.getElementById('vastaus3').innerHTML = taulukko;
}

function jaaKortit() {
  var pakka = [''];
 var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
 //var maat = ['pa','ri','ru', 'he']
 var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
 laskuri = 0;
 for(m = 0; m < maat.length; m++) {
   for(n = 0; n < numerot.length; n++) {
     if(m == maat.length-1 && n == numerot.length-1) {
       pakka[laskuri] = maat[m] + numerot[n];
     }
     else {
       pakka[laskuri] = maat[m]+numerot[n];
       laskuri++;
     }
   }
 }
 var kortit = [];
 for(l = 0; l < 5; l++) {
     temp = pakka[Math.floor(Math.random()*52)];
     kortit[l] = temp;
 }
  document.getElementById('vastaus4').innerHTML = '<p>'+kortit+'</p>';
}
