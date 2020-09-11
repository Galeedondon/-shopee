let i = document.getElementById('formControlRange'),
    o = document.getElementById('price');
    p = document.getElementById('sells');


// use 'change' instead to see the difference in response
i.addEventListener('input', function () {
  o.innerHTML = i.value;
  p.innerHTML = Math.abs(i.value*23);
}, false)

function submitprice() {
  document.getElementById("pricerange1").innerHTML = 40;
  document.getElementById("pricerange2").innerHTML = 120;
  document.getElementById("price").innerHTML = 80;
  document.getElementById("sells").innerHTML = 46000;
}

function coculate() {
    document.getElementById("price1").innerHTML = 65;
    document.getElementById("sells1").innerHTML = 4600;
    document.getElementById("price2").innerHTML = 75;
    document.getElementById("sells2").innerHTML = 31925;
}