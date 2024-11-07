let n1;
let n2;
let operatore;

function inserisci() {
    n1 = parseFloat(document.getElementById("in1").value);
    n2 = parseFloat(document.getElementById("in2").value);
}

function somma() {
    operatore = '+';
    document.getElementById("operatore").innerHTML = "+"

}

function sottrazione() {
    operatore = '-';
    document.getElementById("operatore").innerHTML = "-"

}

function moltiplicazione() {
    operatore = '*';
    document.getElementById("operatore").innerHTML = "x"

}

function divisione() {
    operatore = '/';
    document.getElementById("operatore").innerHTML = "÷"

}

function risultato() {
    switch (operatore) {
        case '+':
            document.getElementById("risultato").innerHTML = n1+"+"+n2+"="+(n1 + n2);
            break;
        case '-':
            document.getElementById("risultato").innerHTML = n1+"-"+n2+"="+(n1 -n2);
            break;
        case '*':
            document.getElementById("risultato").innerHTML =n1+"x"+n2+"="+(n1 *n2); 
            break;
        case '/':
            if (n2 !== 0) {
                document.getElementById("risultato").innerHTML = n1+"÷"+n2+"="+(n1 /n2);
            } else {
                document.getElementById("risultato").innerHTML = "Math error: non si può dividere per 0";
            }
            break;
        default:
            alert(" Seleziona un'operazione.");
    }
    document.getElementById("operatore").innerHTML = "___"
    document.getElementById("in1").value = ""
    document.getElementById("in2").value = ""
}
