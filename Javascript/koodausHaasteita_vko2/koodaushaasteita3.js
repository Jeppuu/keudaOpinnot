//haaste 1: tehtävä tulostaa jokaisen armstrongin luvun
function armstrong() {
  for (var i = 100; i < 1000; i++) {
    var x = i.toString().split('');
    console.log(i + "" + x[0] + x[1] + x[2]);
    if (Math.pow(x[0],3)+Math.pow(x[1],3)+Math.pow(x[2],3)==i) {
      console.log("Armstrongin luku: "+ i);
    }
  }
}
//kutsu armstrong();

//haaste 2: tulosta tähtikuvio
function tahti() {
  var a,b,tahti;
  for (a = 1; a <= 6; a++) {
    for (b = 1; b < a; b++) {
      tahti = tahti + ("*");
    }
    console.log(tahti);
    tahti= '';
    }
}
//kutsu tahti();

//haaste 3: muuta lause "koodikielelle"
function koodiKieli() {
  var string = 'ohjelmointi on hauskaa';
  var newString = string.replace(/o/g, "0").replace(/a/g,"4").replace(/e/g,"3")
  .replace(/i/g,"1").replace(/s/g,"5");
  console.log(newString);
}
//kutsu koodiKieli();
//haaste 4: tulostaa kolmella ja viidellä jaolliset luvut eri tavalla
function hikka() {
for (var i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    console.log("hik");
  } else if (i % 5 == 0) {
    console.log("up");
  } else if (i % 3 == 0 && i % 5 == 0){
    console.log("hik-ip")
  } else {
    console.log(i);
  }
}
}
hikka();
