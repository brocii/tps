async function caricaProdotti() {
    let response = await fetch('prodotti.json'); 
    let dati = await response.json(); 
    let container=document.getElementById("prodotti")
    
    for(let luogo in dati){
        let categoria=document.createElement("div");
        categoria.classList.add("categoria");
        categoria.innerHTML=`${luogo}`;
        container.append(categoria);
        
        for(let nome in dati[luogo]){
            let tipo=document.createElement("div");
            tipo.classList.add("tipo");
            tipo.innerHTML=`${nome}` ;
            categoria.append(tipo)

            for(let prod of dati[luogo][nome]){

                let prodotto = document.createElement("div");
                prodotto.classList.add("card");
                prodotto.addEventListener("click", function() {
                    localStorage.setItem("prodottoSelezionato", JSON.stringify(prod));
                    
                    window.location.href = "dettaglio.html";
                });
                
                let immagine = document.createElement("img");
                immagine.src = prod.immagine;
                immagine.classList.add("prodotto-img");
                
                let prezzo = document.createElement("p");
                prezzo.innerHTML = `${prod.prezzo}`;
                
                prodotto.append(immagine);
                prodotto.append(prezzo);
                tipo.append(prodotto);
            
            }
        }
    }


}
caricaProdotti();


function mostraDettagliProdotto(){
    let info = localStorage.getItem('prodottoSelezionato');
    let prodotto=JSON.parse(info);
    let div=document.getElementById("dettagli")
    let immagine = document.getElementById("immagine");
    immagine.src = prodotto.immagine;
    div.append(immagine);
    document.getElementById("marca").innerHTML=`marca:  ${prodotto.marca}`;
    document.getElementById("modello").innerHTML=`modello:  ${prodotto.modello}`;
    document.getElementById("prezzo").innerHTML = `Prezzo:  ${prodotto.prezzo}`;
    document.getElementById("descrizione").innerHTML = `<br> ${prodotto.descrizione}`;

}


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/dettaglio.html") {
        mostraDettagliProdotto();
    }
});