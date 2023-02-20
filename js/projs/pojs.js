let tabImages = [
    {id:1, libelle:"Article 1 --- T-shirt", chemin:"images/Article 1.jpg", prix:15000, stock: 4, qte: 0, montant: 1},
    {id:2, libelle:"Article 2 --- Chaussettes", chemin:"images/Article 2.jpg", prix:5000, stock:6, qte: 0,montant: 1},
    {id:3, libelle:"Article 3 --- Montre", chemin:"images/Article 3.jpg", prix:55000, stock:2, qte: 0,montant: 1},
    {id:4, libelle:"Article 4 --- Basket", chemin:"images/Article 4.jpg", prix:25000, stock:7, qte: 0,montant: 1},
    {id:5, libelle:"Article 5 --- Pantalon", chemin:"images/Article 5.jpg", prix:10000, stock: 11, qte: 0,montant: 1},
];

let NewTab= [];
let tab2=[];


const Ajouter = document.getElementById("Ajouter");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const num = document.getElementById("num");
const contenu = document.getElementById("contenu");
const contenu2 = document.getElementById("contenu2");
const list = document.getElementById("list");
const titre = document.getElementById("titre")
const bg = document.getElementById("valeurEUro");
const btnListe = document.getElementById("btnListe");
const adresse = document.getElementById("adresse");
const btnEnvoyer = document.getElementById("btnEnvoyer");
const ok = document.getElementById("ok");
const info = document.getElementById("info");
const info2 = document.getElementById("info2");
const Bc = document.getElementById("Bc");
const contenuClient = document.getElementById("contenuClient");
const content = document.getElementById("Client_2");
const Total = document.getElementById("Total");
const fact = document.getElementById("fact");
console.log(content);

function loadContenu(){

    var html = ` <div class="row"> `;

    tabImages.forEach(image => {
        html += `<div class="col-md-4 mx-auto mb-5">
        <div class="card" style="width: 17rem;">
            <img src="${image.chemin}" class="img-thumbnail" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${image.libelle}</h5>
            <p class="card-text">Prix :${image.prix}</p>
            <p class="card-text"> Stock :${image.stock}</p>
            <button value="${image.stock}" class="btn btn-primary" onclick="ajout('${image.id}')" id="${image.id}">Ajouter</button>
            </div>
            </div>
            </div>`;
           
    });
    html += "</div>";
    contenu.innerHTML = html;
}

function  ajout(element) {

   tabImages.forEach(element1 => {

        if(element1.id==element && element1.stock>0){
        
           element1.stock-=1;
                   // element1.qte++;
                let verif = 0;
                for(let i =0;  i< tab2.length; i++ ){
                    if(element1==tab2[i]){
                        verif = 1;
                    }
                }
    
                if(verif == 0){
    
                    tab2.push(element1);
                   console.log(tab2);
    
               }
    
               contenu.innerHTML="";
               loadContenu();
               
            }
        if(element1.stock==0 ){
           document.getElementById(element1.id).setAttribute("disabled","disabled");  
          // alert("Le stock est indisponible pour le moment");   
        }
    });


       /* tab2.forEach(xxx => {
                

        });*/
    
    list.removeAttribute("hidden");
    titre.removeAttribute("hidden");
    btnListe.removeAttribute("hidden");
    Total.removeAttribute("hidden");
    var html2 = `<tr>`;
 
               contenu2.innerHTML="";
               
               var total =0;
               
               tab2.forEach(recherche => {

                
                   if(recherche.id==element){

            recherche.qte++;
            recherche.montant = recherche.qte * recherche.prix;
            
            console.log("total " + total);
            
           
        }
 
        
        html2 +=`
        <tr>
        <td class="col-md-2">${recherche.libelle}</td>
        <td class="col-md-2">${recherche.prix}</td>
        <td class="col-md-2">${recherche.qte}</td>
        <td class="col-md-2">${recherche.montant}</td>
        
        </tr>  
        
        `;
        
        total  += recherche.montant;

    });

    Total.innerHTML="";

    Total.innerHTML += `
    <tr>
        <th>TOTAL = ${total}</th>
        
    </tr>
`;
    console.log("Total = " +total);

  

    html2 += "</tr>";
    contenu2.innerHTML += html2;
               
} 



btnEnvoyer.onclick = function(){


if (prenom.value.trim() != "" && nom.value.trim() != "" && num.value.trim() != "" && adresse.value.trim() != ""){

    let client = {prenom: prenom.value, nom: nom.value, numero_client : num.value, adresse: adresse.value}

    NewTab.push(client);
    console.log(client);
            ok.removeAttribute("hidden");
}else{
    alert("Tous Les champs sont obligatoires");
}

}

btnListe.onclick = function (){
    html2pdf(fact);
    if(NewTab!=0){
        info.removeAttribute("hidden");
        info2.removeAttribute("hidden");
       Bc.removeAttribute("hidden");
       content.removeAttribute("hidden");
       

        contenuClient.innerHTML="";
        NewTab.forEach(client => {
            contenuClient.innerHTML += `
                        <tr>
                            <th>${client.prenom}</th>
                            <th>${client.nom}</th>
                            <th>${client.numero_client}</th>
                            <th>${client.adresse}</th>

                            
                        </tr>
            `;
        });

        content.innerHTML="";
        tab2.forEach(client => {
            content.innerHTML += `
            <tr>
                <th>${client.libelle}</th>
                
            </tr>
`;
        });

      

    }
    
    else{
        alert("Aucun client enregistrer")
    }
}

xhttp4 = new XMLHttpRequest();