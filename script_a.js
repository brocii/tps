let tabella=[]
let i=0;

function salvaDati(){
    let dati={nome:"", cognome:"",citta:"",indirizzo:"",mail:""}
    dati.nome=document.getElementById("nome").value;
    dati.cognome=document.getElementById("cognome").value;
    dati.citta=document.getElementById("citta").value;
    dati.indirizzo=document.getElementById("indirizzo").value;
    dati.mail=document.getElementById("mail").value;


    tabella.push(dati);
    i++;

    

    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("citta").value="";
    document.getElementById("indirizzo").value="";
    document.getElementById("mail").value="";
    
    inserisciDati(dati);
}
function inserisciDati(dati){
    let tab = document.getElementById("tabella");
    let nuovaRiga = tab.insertRow();

    let contatore = nuovaRiga.insertCell(0);
    contatore.innerHTML = i;

    let Nome = nuovaRiga.insertCell(1);
    Nome.innerHTML = dati.nome;

    let Cognome = nuovaRiga.insertCell(2);
    Cognome.innerHTML = dati.cognome;

    let Citta = nuovaRiga.insertCell(3);
    Citta.innerHTML = dati.citta;

    let Indirizzo = nuovaRiga.insertCell(4);
    Indirizzo.innerHTML = dati.indirizzo;

    let cellMail = nuovaRiga.insertCell(5);
    cellMail.innerHTML = dati.mail;
}
