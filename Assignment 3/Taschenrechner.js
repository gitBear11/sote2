var Ergebnis = 0;

function add() {
    Ergebnis = document.getElementById("Output");
    let Eingabe = document.getElementById('Input');
    Ergebnis = Number(Eingabe.value) + Number(Ergebnis.value);

}

function addNumber(a,b) {
    Ergebnis = Number(a) + Number(b);

}

function splitString() {
    let zahlen = document.getElementById('Input').valueOf();
    console.log(zahlen.value);
    zahlen = zahlen.split(" ");
    console.log(zahlen);
    if (zahlen[1] ="+"){
        addNumber(zahlen[0],zahlen[2]);
    }
    showResult();

}

function minus() {
    Ergebnis = document.getElementById("Output");
    let Eingabe = document.getElementById('Input');
    Ergebnis = Number(Ergebnis.value) - Number(Eingabe.value);
}
function devide() {
    Ergebnis = document.getElementById("Output");
    let Eingabe = document.getElementById('Input');
    Ergebnis = Number(Ergebnis.value) / Number(Eingabe.value);
}
function min() {
    Ergebnis = document.getElementById("Output");
    let Eingabe = document.getElementById('Input');
    Ergebnis = Number(Ergebnis.value) * Number(Eingabe.value);
}

function showResult() {
    document.getElementById("Output").value = Ergebnis;

}

function reset() {
    Ergebnis = 0;

}
