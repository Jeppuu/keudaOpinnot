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

function suurin() {
  
}
