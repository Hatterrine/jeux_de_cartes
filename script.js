 // Tableau des cartes Pokémon avec le détails dans l'ordre
        const details = [
            { name: "Amandine", image: "image/amandine.png",gas: false, fille: true,  anniv: "22/06" ,atk: "Citation : << Trop belle !!! >>",def:"Atouts : belle gosse absolue",aura: 0, description: "je défonce lola everyday"},
            { name: "Anaëlle", image: "image/anaelle.png" , gas: false, fille: true,  anniv: "03/01" ,atk: "Citation : << Sigma >> ",def:"Atouts : Gigachad, jawline :)", aura: 2000000000000000, description: "La salle de sport à peur d'elle."},
            { name: "Henan", image: "image/henan.png",gas: true, fille: false, anniv: "07/07" ,atk: "Citation : << J'ai envie de dormir. >>",def:"Atouts : Dormeur professionnel",aura: 100000000000, description: "Il est professionel et certifier."},
            { name: "Kali", image: "image/kali.png", gas: false, fille: true,  anniv: "08/01" ,atk: "Citation : << La cavalière noire des autoroutes. >> ",def:"Atouts : Punchline en or", aura: 80000000000,description: "L'excès de vitesse ça la connait."},
            { name: "Kelly", image: "image/kelly.png", gas: false, fille: true,  anniv: "16/08" ,atk: "Citation : << On ne vend pas la musique on la partage. >>", def:"Atouts : A de bon goût pour la musique et le dessin",aura: 75000000000,   description: "'Rue déserte drnière cigarette plus rien ne bouge !'"},
            { name: "Lina", image: "image/lina.png", gas: false, fille: true,  anniv: "20/09" ,atk: "Citation : << Le luxe est lié au temps qui passe. >>",def:"Atouts :  A beaucoup de style",aura: 10000000000,description: "Toujours là à la met gala"},
            { name: "Lola", image: "image/lola.png", gas: false, fille: true,  anniv: "20/12" ,atk: "Citation : << Ecoutez-moi j'ai déjà jouer à ce jeux ! >>",  def:"Atouts : connaissances hiboux ++",aura: 11527886531144881578778455155484898489,   description: "Trop DaRk, + 10 0000000 aura"},
            { name: "Louane", image: "image/louane.png", gas: false, fille: true,  anniv: "27/10" ,atk: "Citation : << Hello world ! >>",def:"Atouts : print('Elle sait bien manier le code')", aura: 100000000000000,description: "La détermination est en elle."},
            { name: "Lucile", image: "image/lucile.png", gas: false, fille: true,  anniv: "27/01" ,atk: "Citation : << Je rêve ma peinture, et ensuite je peins mon rêve. >>",def:"Atouts : Illustration divine",aura: 210000000000000000000000,description: "Elle est sculptée par les anges."},
            { name: "Mathilde", image: "image/mathilde.png",gas: false, fille: true,  anniv: "12/04" ,atk: "Citation : <<Ce n'est pas parce qu'en hiver on dit 'fermez la porte, il fait froid dehors', qu'il fait moins froid dehors quand la porte est fermée. >>", def:"Atouts : Gentillesse ++",aura: 300000000,description: "Le taux de gentillesse dépase les compteurs."},
            { name: "Nolhan", image: "image/nolhan.png", gas: true, fille: false, anniv: "01/01" ,atk: "Citation : << Coder, la gloire et manger >>",def:"Atouts : Perruque d'immunité activé",aura: 1800000000000000,description: "Il active la perruque d'immunité, attendre 3 trours pour éspérer lui infliger des dégats"},
            { name: "Pauline", image: "image/pauline.png",gas: false, fille: true,  anniv: "29/01" ,atk: "Citation : << Vers l'infini et l'haut dela >>",  def:"Atouts : Laïka et Vienne",aura: 190000000001969,description: "Un petit pas pour l'Homme et un grand pas pour l'humanité"},
            { name: "Perrine", image: "image/perrine.png",gas: false, fille: true,  anniv: "18/02" ,atk: "Citation : << Pomme la pomme, à Méditerranée. >>",def:"Atouts : Mur de meme", aura: 666, description: "Cette personne paraît à la fois inoffensive et très dangereuse ! Attention aux attaques de memes."},
            { name: "Sara", image: "image/sara.png", gas: false, fille: true,  anniv: "21/05" ,atk: "Citation : << En voiture Simone >>",  def:"Atouts : Permis B",aura: 1264845541225651,description: "En plus d'avoir le permis, c'est une personne très mature. Elle est douée aux jeux vidéo."},
            { name: "Sophia", image: "image/sophia.png",gas: false, fille: true,  anniv: "21/12" ,atk: "Citation : << La seule limite est l'imagination >>",  def:"Atouts : Elle est observatrice",aura: 5000000000000000,description: "Wigardium Leviosa !"},
            { name: "Thais", image: "image/thais.png",gas: false, fille: true,  anniv: "25/08" ,atk: "Citation : << Il m'entraine au bout de la nuits. >>",def:"Atouts : A de bon goût musicaux",aura: 8465174854154454,description: "Les démons de minuits"},
            { name: "Toni", image: "image/toni.png",gas: true, fille: false, anniv: "01/12" ,atk: "Citation : << . . . >>",def:"Atouts : Est imprévisible et invisible",aura: 56498798468444987456,description: ". . ."},
            { name: "Valiavo", image: "image/val.png",gas: true, fille: false, anniv: "26/10" ,atk: "Citation : << En vraie je veux rentrer chez moi. >> ", def:"Atouts : Brawlstars",aura: 9898989,description: "Mais il se rendort super vite en général."},
        ];

       

        

////////////////////////////////////////////////////////////////////////////////////////////////

        function creerCarte(cartes){
  

  let iconefille;
  let iconegas;
  //Si le paramètre _pizza de ma fonction a une propriété degueu = true, 
  if(cartes.fille){
     //alors la variable iconeDegueu est égale a l'emoji qui vomit
     iconefille="👧"
  }
  else{
     //sinon la variable iconeDegueu est égale a du texte vide
    iconefille=""
  }
 //Si le paramètre _pizza de ma fonction a une propriété spicy = true, 
   if(cartes.gas){
     //alors la variable iconeSpicy est égale a l'emoji piment
     iconegas="👦"
  }
  else{
     //sinon la variable iconeSpicy est égale a du texte vide
    iconegas=""
  }
  
  //template destinée à stocker le contenu de l'élément en utilisant les valeurs précisées par les variables entourées par ${}
  let contenu = `
    <img src="${cartes.image}">
    <h1 class="nom">${cartes.name} ${iconefille}${iconegas}</h1>
    <div class="container">
      <p class="annive">${cartes.anniv} gr</p>
      <p class="citation">${cartes.atk}</p>
      <p class="auras">Auras :</p>
      <p class="auraa">${cartes.aura}</p>
    <p classs="atouts">${cartes.def}</p>
    <p class="descr"> ${cartes.description}</p>
     
    </div>
  `;

  //créer un élément html de type div
  let carte = document.createElement("div");
  
  //remplir cet element HTML a l'aide du code défini par le template de contenu
  carte.innerHTML = contenu;
  carte.classList.add("card");
  //renvoyer la valeur de la carte créer
  return carte;
}

//pour chaque élément numéroté i de la liste de pizza
for (let i = 0; i < details.length; i++) {
  //créer un objet carte en appelant la fonction creerCarte avec comme paramètre la valeur de l'élément numero i de la liste de pizzas
  let carte = creerCarte(details[i])

  //rajouter cette carte au compartiment "main" du document
  document.querySelector("main").appendChild(carte);
}

