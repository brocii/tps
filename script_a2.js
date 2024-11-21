
let i=0

function salvaDati(){
    
    let dati=[]
    dati.push(nome=document.getElementById("nome").value);
    dati.push(cognome=document.getElementById("cognome").value)
    dati.push(citta=document.getElementById("citta").value);
    dati.push(indirizzo=document.getElementById("indirizzo").value);
    dati.push(mail=document.getElementById("mail").value);

    
    localStorage.setItem("utente"+i,dati)
    localStorage.setItem("contatore",i)
    i++;
    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("citta").value="";
    document.getElementById("indirizzo").value="";
    document.getElementById("mail").value="";
    dati=[];
    inserisciDati();
    
    
}
function inserisciDati() {
    let tab = document.getElementById("tabella")
    tab.innerHTML = "";  
    let j=localStorage.getItem("contatore")

    
    for (let z = 0; z <= j; z++) {
        let utente = localStorage.getItem("utente" + z);
        
            
            let info = utente.split(",");

            let nuovaRiga = tab.insertRow();

            
            let contatore = nuovaRiga.insertCell(0);
            contatore.innerHTML = z+1;

            let nome = nuovaRiga.insertCell(1);
            nome.innerHTML = info[0]; 

            let cognome = nuovaRiga.insertCell(2);
            cognome.innerHTML = info[1]; 

            let citta = nuovaRiga.insertCell(3);
            citta.innerHTML = info[2]; 

            let indirizzo = nuovaRiga.insertCell(4);
            indirizzo.innerHTML = info[3]; 

            let mail = nuovaRiga.insertCell(5);
            mail.innerHTML = info[4]; 
    }
}  









