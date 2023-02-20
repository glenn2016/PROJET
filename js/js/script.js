let tabImages = [
    { id: 1, libell e: "Article 1 --- T-shirt", chem in: "images/Article 1.jpg", p rix: 15000, stock: 4, qte: 0, monta nt: 1 },
    { id: 2, libell e: "Article 2 --- Chaussettes", chem in: "images/Article 2.jpg", p rix: 5000, s tock: 6, q te: 0, mon tant: 1 },
    { id: 3, libell e: "Article 3 --- Montre", chem in: "images/Article 3.jpg", p rix: 55000, s tock: 2, q te: 0, mon tant: 1 },
    { id: 4, libell e: "Article 4 --- Basket", chem in: "images/Article 4.jpg", p rix: 25000, s tock: 7, q te: 0, mon tant: 1 },
    { id: 5, libell e: "Article 5 --- Pantalon", chem in: "images/Article 5.jpg", p rix: 10000, stock: 11, qt e: 0, mont ant: 1 },
];

let NewTab = [];
let tab2 = [];


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

function loadContenu() {

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

function jout(element) {

    tabImages.forEach(element1 => {

                if (element1.i d == element && element1.st o ck > 0) {

                    element1.stoc k -= 1;
                    ent1.qte++;
                    verif = 0;
                    (le t i = 0; i tab2.length; i++)
                    el ement1 == t ab2[i]) {
                    f = 1;



                    ve rif == 0) {

                    .push(element1);
                    sole.log(tab2);



                    tenu.innerHTML = " ";
                    dContenu();


                    if (element1.stoc k = 0 0) {
                        document.getElementById(element1.id).setAttribute("disabled", "disabled"
                            // alert("Le stock est indisponible pour le moment");   
                        }
                    });


                tab2.forEach(xxx => {


                        *
                        /

                        list.removeAttribute("hidden");
                        titre.removeAttribute("hidden");
                        btnListe.removeAttribute("hidden");
                        Total.removeAttribute("hidden");
                        var html2 = `<tr>`;

                        nerHTML = "";

                        0;

                        rEach(recherche => {

                            //console.log(document.getElementById(recherche.id).value)
                            (recherche.id == elemen t) {

                                //  recherche.stock= recherche.stock-1;

                                // document.getElementById(recherche.id).value;
                                recherche.qte++;
                                recherche.montant = recherche.qte * recherche.prix;

                                console.log("total " + total);


                            }
                            /*contenu.innerHTML="";
                             loadContenu();

                             if(recherche.stock==0){
                                document.getElementById(recherche.id).setAttribute("disabled","disabled");
                            }*/







                            /*if(recherche.qte==recherche.stock){
                                //console.log("ok");
                                //alert("Vous ne pouvez plus ajouter car le stock est termine");
                                // document.getElementById(recherche.id).setAttribute("disabled","disabled");
                               // document.getElementById(recherche.id).setAttribute("disabled","disabled")
                            }*/

                            html2 += `
        <tr>
        <td class="col-md-2">${recherche.libelle}</td>
        <td class="col-md-2">${recherche.prix}</td>
        <td class="col-md-2">${recherche.qte}</td>
        <td class="col-md-2">${recherche.montant}</td>
        
        </tr>  
        
        `;

                            total += recherche.montant;

                        });

                        Total.innerHTML = "";

                        Total.innerHTML += `
    <tr>
        <th>TOTAL = ${total}</th>
        
    </tr>
`;
                        console.log("Total = " + total);

                        // <td class="col-md-2">${recherche.montant}</td>

                        html2 += "</tr>";
                        contenu2.innerHTML += html2;

                        //afficheTableau();


                    }

                    btnEnvoyer.onclick = function() {


                        if (prenom.value.trim() != "" && nom.value.trim() != "" && num.value.trim() != "" && adresse.value.trim() != "") {

                            let client = { prenom: prenom.value, nom: nom.value, numero_cient: num.value, adresse: adresse.v alue }
                                //alert(client);
                            NewTab.push(client);
                            console.log(client);
                            ok.removeAttribute("hidden");
                        } else {
                            alert("Tous Les champs sont obligatoires");
                        }

                    }

                    btnListe.onclick = function) {

                    html2pdf(fact);
                    if (NewTa b != 0) {
                        info.removeAttribute("hidden");
                        info2.removeAttribute("hidden");
                        Bc.removeAttribute("hidden");
                        content.removeAttribute("hidden");


                        contenuClient.innerHTML = "";
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

                        content.innerHTML = "";
                        tab2.forEach(client => {
                            content.innerHTML += `
            <tr>
                <th>${client.libelle}</th>
                
            </tr>
`;
                        });



                    }
                }
            }