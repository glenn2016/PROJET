let artiElementTable = [

        { id: 1, libelle: "Poulet",qte :1,montant:2500,  prix: 2500, stock: 5,  chemin: "img/img_projet/article0.jpeg" },
        { id: 2, libelle: "viande hachée", qte :1, montant:3500, prix: 3500, stock: 6, chemin: "img/img_projet/article1.png" },
        { id: 3, libelle: "viande boeuf", qte :1, montant:3000,  prix: 3000, stock: 5, chemin: "img/img_projet/article2.png" },
        { id: 4, libelle: "saucisse de toulouse", qte :1, montant:  4000,  prix: 4000, stock: 5, chemin: "img/img_projet/article3.png" },
        { id: 5, libelle: "Epinard", qte :1, montant: 1500,  prix: 1500, stock: 7, chemin: "img/img_projet/article4.png" },
        { id: 6, libelle: "Carrot", qte :1, montant:2000,  prix: 2000, stock: 5, chemin: "img/img_projet/article5.png" },
        { id: 7, libelle: "Pomme de terre", montant:2500,  qte :1, prix: 2500, stock: 5, chemin: "img/img_projet/article6.png" },
        { id: 8, libelle: "Tomates", qte :1, montant:700,  prix: 700, stock: 9., chemin: "img/img_projet/article7.jpg" },
        { id: 9, libelle: "Coca-cola", qte :1, montant: 500,  prix: 500, stock: 15, chemin: "img/img_projet/article8.jpg" },
        { id: 10, libelle: "Fanta", qte :1, montant:500,  prix: 500 , stock:5, chemin: "img/img_projet/article9.jpg" },
        { id: 11, libelle: "Pepsi", qte :1, montant:500,  prix: 500, stock: 15, chemin: "img/img_projet/article10.jpg" },
        { id: 12, libelle: "orangina", qte :1, montant: 1500,  prix: 1500, stock: 7, chemin: "img/img_projet/article11.jpg" },
        { id: 13, libelle: "hamburger", qte :1, montant: 3500,  prix: 3500, stock: 9, chemin: "img/img_projet/article12.jpg" },
        { id: 14, libelle: "Tacos", qte :1, montant:1000,  prix: 1000,  stock: 5, chemin: "img/img_projet/article13.jpeg" },
        { id: 15, libelle: "Pizza", qte :1, montant:5500,  prix: 5500, stock: 9, total:0,  chemin: "img/img_projet/article15.jpg" },
        { id: 16, libelle: "Hot dog", qte :1, montant:5500,  prix: 5500, stock: 10, total:0, chemin: "img/img_projet/article14.jpeg" },
    ]; 

    


let articlecmd =[];

const contenue = document.getElementById("contenue");

function chargcontenue() { 
    var html = ` <div class="row" >`;
    artiElementTable.forEach(Elements => { 
 html += `<div  class="col-md-3 mb-2">       
                

 
                <div class="card">
                      <img src="${Elements.chemin}" class="card-img-top" width="200px" height="230px" >
                    <div class="card-body" style="background-color: #db9807;"> 
                       <h6 class="card-title">ARTICLES : ${Elements.libelle} </h6>
                       <h6 class="card-text">PRIX : ${Elements.prix} FCFA</h6>
                       <h6 class="card-text"> STOCK : ${Elements.stock}</h6> 
                       <button value="${Elements.id}" id="${Elements.id}" class="btn btn-light"  type="button" onclick="AjoutTAbleauArticle(${Elements.id})"  >Ajouter</button>
                    </div>
                </div>
            </div>` ;
    });
html += `</div>`;

    contenue.innerHTML+= html;
}  


/*
function AjoutTAbleauArticle(id){

    Tablearticle.removeAttribute('hidden');
    var produit = document.get
    var tr = document.createElement('tr');
    var libelle = document.createElement('td');
    artiElementTable.forEach(Elements => {
        if(Elements.id == id){
            
            libelle.innerHTML= Elements.libelle ;
           tr.appendChild(libelle);

           
            Tablearticle.appendChild(tr);  


        }
    });
}
*/


let qte = 1;
const list=document.getElementById('list'); 
const Tablearticle=document.getElementById('Tablearticle'); 
const nom =document.getElementById('nom');
const prenom = document.getElementById('prenom');
const adress = document.getElementById('adress');
const ajout = document.getElementById('ajout')
const btnValide = document.getElementById('btnValide');
const btnajouter = document.getElementById('btnajouter');
const numtel = document.getElementById('numtel'); 
const vide = document.getElementById('vide'); 
const factures=document.getElementById('factures');
const tablTable=document.getElementById('tablTable');
const acmd = document.getElementById('acmd');
const   pdfFile =document.getElementById('pdfFile');
const fact  =  document.getElementById('fact');
const ToTals =document.getElementById('ToTals');
let panier = document.getElementById('panier'); 



//pdfFile na pas encore etet declarer 
/*
btnValide.onclick = function () {
    if (Tablearticle.length != 0) {
        pdfFile.removeAttribute('hidden');
        vide.setAttribute('hidden', 'hidden');
    } else {
        pdfFile.setAttribute('hidden', 'hidden');
        vide.removeAttribute('hidden');
    }
}
*/

function viderChamps(){
    prenom.value = "";
    nom.value = "";
    adress.value = "";
    numtel.value ="";
} 




 function AjoutTAbleauArticle(idT) {
     //et idT ; 
     
     let total=0;
    
     artiElementTable.forEach(element => {
        if (element.id == idT) {
            //boolean est une variable utiliser comme boolen
            let boolean  = 0;
            for (let i = 0; i <  articlecmd .length; i++) {
                if (element ==  articlecmd [i]) {
                    boolean  = 1;
                }

            }
            if (boolean  == 0) {
               
                element.stock = element.stock-1;;
                 artiElementTable.stock = element.stock - element.qte;
                 articlecmd.push(element); 
                 list.removeAttribute('hidden');
                afficherArticle();
                contenue.innerHTML = "";
                chargcontenue();
            } else { 
 
                element.qte +=1;
                element.stock = element.stock - 1;
                artiElementTable.stock = element.stock - 1;
              //  element.montant = element.prix;
                element.montant += element.prix; 
                
                var total =  element.prix ;

                element.total = element.montant ; 

                afficherArticle(); 

                contenue.innerHTML = "";
                chargcontenue()
                if (onclick="AjoutTAbleauArticle" && element.stock == 0) {
                   const  e = document.getElementById(element.id);
                    e.setAttribute("disabled","disabled");
                    console.log(e)
                 alert("stock vide");

               
                 // artiElementTable.id.setAttribute("disabled","disabled");
                //const  button = document.querySelector(" button").element.id;
                  //document.getElementsByClassName('btn btn-light').setAttribute("disabled", "disabled");
                 // element.id.setAttribute("disabled", "disabled");
                // element.id.disabled =  false;
                  //document.getElementById(element.id).setAttribute("disabled", "disabled");
                 // button.elemnt.elementstyle.backgroundColor="black"  
                }
            }             //afficherpannier()  afficherTotal(params)

        }
    });
 } 

    

    function afficherArticle(params) {
       var ToTaL = 0
        Tablearticle.innerHTML = '';
        articlecmd.forEach(element => {
            Tablearticle.innerHTML += `
                        <tr>
                        
                            <th>${element.libelle}</th>
                            <th>${element.prix} FCFA</th>
                            <th>${element.qte}</th>
                            <th>${element.montant} FCFA</th>
                        </tr>
            `;
            ToTaL+= element.montant

            //console.log(ToTaL)
        }); 

        
    


    
       
        ToTals.innerHTML = '';
    
            ToTals.innerHTML = `
                        <tr>
                         <th><center>${ToTaL} FCFA </center></th>
                        </tr>
            `;
         
    }
        
     

     
  
    
   let idArticle = 0;
   let clients = [];  





btnValide.onclick = function () {  


    let TextControl = /^[a-z-A-Z\s]+$/;
    let NumberControl =/^[0-9\s]+$/;
    let ControlAdress =/^[a-z-A-Z-0-9\s]+$/;
   
  if (prenom.value.trim() != "" && nom.value.trim() != "" && adress.value.trim() != "" && numtel.value.trim() != "" && TextControl.test(prenom.value) == ! false && TextControl.test(nom.value) == ! false && ControlAdress.test(adress.value) == ! false &&NumberControl.test(numtel.value) == ! false ) {
    factures.removeAttribute('hidden');
 
        idArticle = idArticle + 1
        let client = { id: idArticle, prenom: prenom.value, nom: nom.value,adress: adress.value, numtel:numtel.value }
        clients.push(client)
        control();
        facturEClients();
        viderChamps(); 
        pdfFile.removeAttribute("hidden");
        btnValide.setAttribute('hidden', 'hidden');

     
    } else {  
        alert('Attention !!!')
        alert('Tous les champs sont obligatoires et ne doivent pas contenir des caractères spéciaux');
    }

   
}

      


   
   


    function facturEClients(params) {
    factClients.innerHTML = '';
        clients.forEach(elementClient => {
        factClients.innerHTML += `
                        <tr>
                            <td>${elementClient.prenom} ${elementClient.nom}</td>
                            <td>${elementClient.adress}</td>
                            <td>${elementClient.numtel}</td>
                            
                        </tr> 
                        <br> 
                        

                        
                    
            `; 
        
        });
    }   

    

    pdfFile.onclick = function () {
        
        //html2pdf(factures , list);
         html2pdf(fact);

    }  
    
    
 


 
function control() {
    if(onclick="btnValide" && articlecmd == 0){

        factures.setAttribute('hidden','hidden');
        alert("Aucun article n'a ete commander");    
       // clients="";
        void window.location.reload()
    }   
    
} 
   
 
  
    // recois la date system 

    var date = new Date();
    //recugperer l'anne

    var anne= date.getFullYear();
    var mois= date.getMonth();
    var jour= date.getDate();
    var jour_sem= date.getDay(); 

    var heure=date.getHours();
    var minute=date.getMinutes();
    var seconde=date.getSeconds();

    var MOIS =["jan","fev","mars","avr","mai","juin","juill","aout","sept","oct","nov","dec"]
    var JOUR_EM =["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]

    mois =MOIS[mois]
    jour_sem =JOUR_EM[jour_sem]




     document.getElementById('dateHE').innerHTML =jour_sem+" "+ jour+" "+ mois + " " + anne+" - " + heure+  ":" + minute+  ":" +seconde;

    console.log(date);

    var exam = function(){



    } 

    function exam(X) {}