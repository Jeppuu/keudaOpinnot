//Tehtävä 1 tarkista onko merkkijonon ensimmäinen kirjain iso
function ekaKirjain() {
  let merkkijono = document.getElementById('yksi').value;
  //määritellään etsimään ensimmäisestä kirjaimesta isoa aakkosta
  let tarkista = /^[A-Z]/;
  //p vastaus diviä varten
  let p = '';
  //tarkistetaan onko eka kirjain iso ja lähetetään viesti sen mukaan
    if (tarkista.test(merkkijono)) {
      p = "Merkkijonon ensimmäinen kirjain on iso!";
    } else {
      p = "Merkkijonon ensimmäinen kirjain on pieni!";
    }
    //Kirjoitetaan vastaus vastaus diviin
    document.getElementById('vastaus1').innerHTML = p;
}
//tehtävä 2 poistaa merkkijonon alusta ja lopusta välilyönnit
function siisti() {
  let merkkijono = document.getElementById('kaksi').value;
  let p = '';
  //poistetaan välilyönnit merkkijonon ympäriltä trim metodilla
  p = merkkijono.trim();
  //kirjoitetaan siistitty merkkijono vastaus diviin
  document.getElementById('vastaus2').innerHTML = p;
}
function laskeVokaalit() {
  let merkkijono = document.getElementById('kolme').value;
  let p = '';
  //siirretään vokaalien määrä p muuttujaan
  p = merkkijono.match(/[aeiou]/gi).length;
  //kirjataan tulos vastaus diviin
  document.getElementById('vastaus3')
  .innerHTML = "<p>Merkkijonosta löytyi " + p + " vokaalia!</p>";
}
//tehtävä 4 tarkista onko merkkijono alfanumeerinen
function alfanumeerinen() {
  let merkkijono = document.getElementById('neljä').value;
  let p = '';
  //määritetään regex etsimään alfanumeeriset merkit
  let tarkista = /[a-z 0-9]+$/gi;
  //jos merkkijono on alfanumeerinen
  if (tarkista.test(merkkijono)) {
    p = "Merkkijono on alfanumeerinen!";
  } else {
    p = "Merkkijono ei ole alfanumeerinen!";
  }
  //kirjoitetaan tulos vastaus diviin
  document.getElementById('vastaus4')
  .innerHTML = p;
}
//tehtävä 5 tarkistaa onko annettu merkkijono postinumero
function postinumero() {
  let merkkijono = document.getElementById('viisi').value;
  let p = '';
  //määritetään regex etsimään numerot (digits)
  let tarkista = /^\d{5}$/g;
  //jos numeraalisen merkkijonon pituus on 5 määritellään se postinumeroksi
  if (tarkista.test(merkkijono)) {
    p = "Merkkijono on postinumero!"
  } else {
    p = "Merkkijono ei ole postinumero!"
  }
  //kirjataan tulos vastaus diviin
  document.getElementById('vastaus5').innerHTML = p;
}
//tehtävä 6 tarkistaa onko annettu merkkijono sosiaaliturvatunnus
function sotu() {
  let merkkijono = document.getElementById('kuusi').value;
  let p = '';
  //määritetään regex tarkastamaan että merkkijonossa on 6 lukua,
  //sitten - tai a, jonka jälkeen kolme lukua ja joko kirjain tai luku
  let tarkista = /\d{6}(-|a)\d{3}(\w|\d)/gi;
  //jos merkkijono on sosiaaliturvatunnus
  if (tarkista.test(merkkijono)) {
    p = "Merkkijono on sosiaaliturvatunnus!"
  } else {
    p = "Merkkijono ei ole sosiaaliturvatunnus!"
  }
  //kirjoitetaan tulos vastaus diviin
  document.getElementById('vastaus6').innerHTML = p;
}
//tehtävä 7 tarkistaa onko annetussa merkkijonossa html tägejä
function html() {
  let merkkijono = document.getElementById('seitseman').value;
  let p = '';
  //määritellään regex tunnistamaan html tagit
  let tarkista = /<\/?[a-z][\s\S]*>/i;
  //jos merkkijonossa on html tägejä
  if (tarkista.test(merkkijono)) {
    p = "Merkkijono sisältää html tägejä!";
  } else {
    p = "Merkkijono ei sisällä html tägejä!";
  }
  //kirjoitetaan tulos vastaus diviin
  document.getElementById('vastaus7').innerHTML = p;
}
