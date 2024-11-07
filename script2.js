let n1;
let n2;
let operatore;


function in1(){
    n1=parseFloat(document.getElementById("display-i").value)
    document.getElementById("display-i").value= " ";
}
function in2(){
    n2=parseFloat(document.getElementById("display-i").value)
}


function scrivi9(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("9");
    }
    else{
        document.getElementById("display-i").value = String(t+"9");
    }
    

}
function scrivi8(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("8");
    }
    else{
        document.getElementById("display-i").value = String(t+"8");
    }
    

}function scrivi7(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("7");
    }
    else{
        document.getElementById("display-i").value = String(t+"7");
    }
    

}function scrivi6(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("6");
    }
    else{
        document.getElementById("display-i").value = String(t+"6");
    }
    

}function scrivi5(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("5");
    }
    else{
        document.getElementById("display-i").value = String(t+"5");
    }
    

}function scrivi4(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("4");
    }
    else{
        document.getElementById("display-i").value = String(t+"4");
    }
    

}function scrivi3(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("3");
    }
    else{
        document.getElementById("display-i").value = String(t+"3");
    }
    

}function scrivi2(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("2");
    }
    else{
        document.getElementById("display-i").value = String(t+"2");
    }
    

}function scrivi1(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("1");
    }
    else{
        document.getElementById("display-i").value = String(t+"1");
    }
    

}function scrivi0(){
    let t=parseFloat(document.getElementById("display-i").value)
    if(isNaN(t)){
        document.getElementById("display-i").value = String("0");
    }
    else{
        document.getElementById("display-i").value = String(t+"0");
    }
    

}
function somma() {
    operatore = '+';
    in1();
    document.getElementById("display-o").innerHTML = String(n1+" +");

}

function sottrazione() {
    operatore = '-';
    in1();
    document.getElementById("display-o").innerHTML = String(n1+" -");

}

function moltiplicazione() {
    operatore = '*';
    in1();
    document.getElementById("display-o").innerHTML = String(n1+" x");

}

function divisione() {
    operatore = '/';
    in1();
    document.getElementById("display-o").innerHTML = String(n1+" ÷");

}
function risultato() {
    switch (operatore) {
        case '+':
            in2();
            document.getElementById("display-i").value = String(n1 + n2);
            document.getElementById("display-o").innerHTML = String(n1 + n2);
            break;
        case '-':
            in2();
            document.getElementById("display-i").value = String(n1 - n2);
            document.getElementById("display-o").innerHTML = String(n1 - n2);
            break;
        case '*':
            in2();
            document.getElementById("display-i").value =String(n1 * n2); 
            document.getElementById("display-o").innerHTML =String(n1 * n2);
            break;
        case '/':
            in2();
            if (n2 !== 0) {
                document.getElementById("display-i").value = String(n1 / n2);
                document.getElementById("display-o").innerHTML = String(n1 / n2);
            } else {
                document.getElementById("display-o").innerHTML = String("Math error");
                document.getElementById("display-i").value= "impossibile dividere per 0 ";
            }
            break;
        default:
            alert(" Seleziona un'operazione.");
    }

}

function reset() {
    document.getElementById("display-i").value = ""; 
    document.getElementById("display-o").innerText = "_______";
    n1=0;
    n2=0;
}