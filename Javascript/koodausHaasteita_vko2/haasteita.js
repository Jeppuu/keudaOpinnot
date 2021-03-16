//haaste 1
function suurinPienin(a,b,c) {

  if (a > b && a > c) {
    console.log('Suurin luku on ' + a);
  } else if (b > a && b > c) {
    console.log('Suurin luku on ' + b);
  } else if (c > a && c > b) {
    console.log('Suurin luku on ' + c);
  }
  if (a < b && a < c) {
    console.log('Pienin luku on ' + a);
  } else if (b < a && b < c) {
    console.log('Pienin luku on ' + b);
  } else if (c < a && c < b) {
    console.log('Pienin luku on ' + c);
  }
}
//suurinPienin(2,3,4);

//haaste 2
function Parillinen(x) {
  if (x % 2) {
    console.log('luku ' + x + ' on pariton');
  } else {
    console.log('luku ' + x + ' on parillinen');
  }
}
//Parillinen(1195);

//haaste 3 on erillisessä kansiossa 'kuukaudet'
//haaste 4
function osoiteRekisteri(etunimi,sukunimi,osoite,postinumero,
  toimipaikka,puhelin,email) {

  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.osoite = osoite;
  this.postinumero = postinumero;
  this.toimipaikka = toimipaikka;
  this.puhelin = puhelin;
  this.email = email;
}
var Jaakko = new osoiteRekisteri('Jaakko', 'Jalmari',
   'Jalmarinkuja 4', '04250', 'Jalskila', '0445542788', 'jallu@gmail.com');

var Helmeri = new osoiteRekisteri('Helmeri', 'Hellä','kuja 45', '00030',
'Helskilä','0505863429','helmeri76@gmail.com');

var Horniboi = new osoiteRekisteri('Horniboi','Hornier Van You',
'Hornistreet 69','9996','Hornijail','00569322','sendmehorni@gmail.com');
//console.log(Horniboi.osoite);

//haaste5
function aakkoset(sana) {
  var array = Array.from(sana);
  array.sort();
  var tuloste = array.join('');
  console.log(tuloste);
}
//aakkoset('turbiinimoottori');

//haaste 6
function arvioi(nimi,arvosana) {
  if (arvosana <50) {
    return nimi + ' Hylätty';
    } else if (arvosana <60) {
      return nimi + ' T1';
    } else if (arvosana < 70) {
      return nimi + ' T2';
    } else if (arvosana < 80) {
      return nimi + ' H3';
    } else if (arvosana < 90) {
      return nimi + ' H4';
    } else if (arvosana < 100) {
      return nimi + ' K5';
    }
}
//arvioi('Jenna',45);
