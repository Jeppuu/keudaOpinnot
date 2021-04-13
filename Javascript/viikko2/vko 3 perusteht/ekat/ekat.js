//tehtävä yksi tulosta parilliset luvut
function parilliset() {
  var luku = document.getElementById('parillinen').value;
  var p = "<p>";
  for (var i = 2; i <= luku; i+= 2) {
    p+=i;
    p+=" ";
  }
  p+="</p>";
  document.getElementById('parilliset').innerHTML = p;
}
//tehtävä 2 tulosta joka toiseksi kirjaimeksi Ö
function iso() {
  let sana = document.getElementById('iso').value;
  let p = "<p>";
  for (var i = 0; i < sana.length; i++) {
    p+= sana[i];
    p+= "Ö";
  }
  p+="</p>";
  document.getElementById('vastaus2').innerHTML = p;
}
//tehtävä 3 tarkista onko sanassa ö kirjainta
function tarkistaKirjain() {
  let sana = document.getElementById('kirjain').value;
  let vastaus = 'Sanassa ei ole ö kirjainta'
  for (var i = 0; i < sana.length; i++) {
    if (sana[i] == 'ö' || sana[i] == 'Ö') {
      vastaus = 'Sanassa on ö kirjain'
    }
      document.getElementById('vastaus3')
      .innerHTML = '<p>' + vastaus +  '</p>';
  }
}
//tehtävä 4 laske kertoma
function laskeKertoma() {
  let luku = document.getElementById('kertoma').value;
  let kertoma = 1;
  for (var i = 1; i <= luku; i++) {
    kertoma *= i;
  }
  document.getElementById('vastaus4')
  .innerHTML = '<p>' + 'luvun ' + luku + ' kertoma on ' + kertoma + '</p>';
}
//tehtävä 5 tulosta luvut 1-100 ja hipheijaa
function tulosta() {
  let p = '';
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      p+= 'hipheijaa ';
    } else if (i % 5 == 0) {
      p+= 'heijaa ';
    } else if (i % 3 == 0) {
      p+= 'hip ';
    } else {
      p+= i + ' ';
    }
    document.getElementById('vastaus5').innerHTML = p;
  }
}
//tehtävä 6 tulosta luvut 1-100
function kymmenen() {
  let p = '';
  for (var i = 1; i <= 10; i++) {
    p+= i + ' ';
  }
  document.getElementById('vastaus6')
  .innerHTML = '<p>' + p + '</p>';
}
//tehtävä 7 laske yhteen 1-10
function laskeYhteen() {
  let p = 0;
  for (var i = 0; i <= 10; i++) {
    p+= i;
  }
  document.getElementById('vastaus7')
  .innerHTML = '<p>' + p + '</p>';
}
//tehtävä 8 laske potenssi
function potenssi() {
  let luku = document.getElementById('luku').value;
  let potenssi = document.getElementById('potenssi').value;
  let p = luku;
  for (var i = 1; i < potenssi; i++) {
    p*= luku;
  }
  document.getElementById('vastaus8')
  .innerHTML = '<p>' + p + '</p>';
}
//tehtävä 9 etsi annetuista luvuista pienin ja suurin
function pieninSuurin() {
  let luku1 = document.getElementById('luku1').value;
  let luku2 = document.getElementById('luku2').value;
  let luku3 = document.getElementById('luku3').value;
  let luku4 = document.getElementById('luku4').value;
  let luku5 = document.getElementById('luku5').value;

  arr = [luku1,luku2,luku3,luku4,luku5];
  pienin = Math.min(...arr);
  suurin = Math.max(...arr);

  document.getElementById('vastaus9')
  .innerHTML = '<p>' + 'Luvuista pienin on ' +pienin +
   ' ja suurin on ' + suurin + '</p>';
}
//tehtävä 10 lisää satunnainen kirjain joka toiseksi kirjaimeksi
function arvoKirjain() {
  let sana = document.getElementById('satunnainen').value;
  let p = '';
  const aakkoset = " abcdefghijklmnopqrstuvwxyzåäö"
  for (var i = 0; i < sana.length; i++) {
    p+= sana[i]
    p+= aakkoset[Math.floor(Math.random() * aakkoset.length)]
  }
  document.getElementById('vastaus10').innerHTML = p;
}
//tehtävä 11 tulosta parilliset, parittomat ja niiden summat
function pariSumma() {
  let pienempi = parseInt(document.getElementById('pienempi').value);
  let suurempi = parseInt(document.getElementById('suurempi').value);
  let parilliset;
  let parittomat;
  let parillisetLuvut = '';
  let parillisetSumma = 0;
  let parittomatLuvut = '';
  let parittomatSumma = 0;
  //määritellään parilliset
  if (pienempi % 2 == 0) {
    parilliset = pienempi;
  } else {
    parilliset = pienempi + 1;
  }
  for (var i = parilliset; i <= suurempi; i+= 2) {
    parillisetLuvut += i + ' ';
    parillisetSumma += i;
  }
  //määritellään parittomat
  if (pienempi % 2 == 0) {
    parittomat = pienempi + 1;
  } else {
    parittomat = pienempi;
  }
  for (var j = parittomat; j <= suurempi; j+= 2) {
    parittomatLuvut += j + ' ';
    parittomatSumma += j;
  }
  document.getElementById('vastaus11')
  .innerHTML = '<p>Parilliset numerot: ' + parillisetLuvut +
  ' ja niiden summa: ' + parillisetSumma + '</p>' +
  '<p> Parittomat luvut: ' + parittomatLuvut +
   ' ja niiden summa: ' + parittomatSumma + '</p>';
}
