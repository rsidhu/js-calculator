var subtotal
var tip;
var total;

function small() {
	subtotal = document.getElementById("billAmount")[0].value;
    tip = parseInt(subtotal) * .1;
    total = parseInt(subtotal) + parseInt(tip);
    document.getElementById("tipBox").innerHTML="$" + tip;
	document.getElementById("totalBox").innerHTML="$" + total;
}

function medium() {
	subtotal = document.getElementById("billAmount")[0].value;
    tip = parseInt(subtotal) * .15;
    total = parseInt(subtotal) + parseInt(tip);
    document.getElementById("tipBox").innerHTML="$" + tip;
	document.getElementById("totalBox").innerHTML="$" + total;
}

function large() {
	subtotal = document.getElementById("billAmount")[0].value;
    tip = parseInt(subtotal) * .2;
    total = parseInt(subtotal) + parseInt(tip);
    document.getElementById("tipBox").innerHTML="$" + tip;
	document.getElementById("totalBox").innerHTML="$" + total;
}

function reset() {
	subtotal = document.getElementById("billAmount")[0].value;
    subtotal = 0;
    tip = 0;
    total = 0;
    document.getElementById("tipBox").innerHTML="$" + tip;
	document.getElementById("totalBox").innerHTML="$" + total;

}