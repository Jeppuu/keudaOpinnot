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

function laskeKertoma() {
  let luku = document.getElementById('kertoma').value;
  let kertoma = 1;
  for (var i = 1; i <= luku; i++) {
    kertoma *= i;
  }
  document.getElementById('vastaus4')
  .innerHTML = '<p>' + 'luvun ' + luku + ' kertoma on ' + kertoma + '</p>';
}

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

function kymmenen() {
  let p = '';
  for (var i = 1; i <= 10; i++) {
    p+= i + ' ';
  }
  document.getElementById('vastaus6')
  .innerHTML = '<p>' + p + '</p>';
}

function laskeYhteen() {
  let p = 0;
  for (var i = 0; i <= 10; i++) {
    p+= i;
  }
  document.getElementById('vastaus7')
  .innerHTML = '<p>' + p + '</p>';
}

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

function pariSumma() {
  var nro1, nro2, palku, ralku,
   psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = document.getElementById('pienempi').value;
  nro2 = document.getElementById('suurempi').value;
  if (nro1 % 2 == 0) {
    palku = nro1;
  }
  else {
    palku = nro1 + 1;
  }
  for (var b = palku; b <= nro2; b += 2) {
    pluvut += b + ' ';
    psumma += b;
  }
  if(nro1 % 2 == 0) {
    ralku = nro1 + 1;
  } else {
    ralku = nro1;
  }
  for (var r = ralku; r<=nro2; r+=2) {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('vastaus11')
  .innerHTML = '<p> Parilliset numerot: ' + pluvut +
  ' ja niiden summa: ' + psumma + ' </p>'
  '<p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '
  + rsumma + '</p>';
}
