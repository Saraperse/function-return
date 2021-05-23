// A quoi sert une fonction ? Leçon débutant

console.log('Bonjour all');
console.log('Bonjour all');
console.log('Bonjour all');

//on a alors inventé les fonctions pour mutualiser le code 

function Bonjour (){
console.log('Bonjour all');
}

Bonjour();
Bonjour();
Bonjour();


const hola = function(){
    console.log("Hola")
}
hola();

const Boungiourno = () =>{
console.log("Hello");
}
Boungiourno();

// usage des paramètres : 

function Bonjour (nom){
    console.log( "bonjour" + nom)
}
Bonjour(' Sarah')

// possibilité de customiser le texte

function Bonjour (nom){
    console.log( "Hello" + nom)
}
Bonjour(' Sarah')
Bonjour(' Sarah')
Bonjour(' Sarah')
Bonjour(' Sarah')
Bonjour(' Sarah')


// opétation de calcul

var compteur = 1;
compteur ++;
compteur ++;
compteur ++;
compteur ++;
compteur ++;
console.log(compteur);




var compteur = 1;
function plus(compteur){
    compteur ++;
}
plus(compteur);
console.log(compteur);





//  // resultat change en fonction da la place de console.log

function plus(compteur){
    compteur ++;
    console.log(compteur);
}
var compteur = 1;
plus(compteur);



// // remarque : "compteur" que vous avez en paramètres n'est pas celui que vous envoyez : 
// // function plus(compteur)
// //plus(compteur)


// // demo : 
function plus(compteur) {
    compteur ++;
}
let compteur = 1;
plus(compteur);
console.log(compteur);
// // c'est à dire que le compteur dans la fonction n'est pas le même nombre que dans


function plus(compteur){
    compteur ++;
    console.log("dans la fonction" + compteur);
}
let compteur = 1;
plus(compteur);
console.log(compteur);


// return : la fonction de return est d'envoyer une valeur en dehors de la fonction
//Ex : 


function adition(num){
    return num*5;
}


var resultat = adition(5);
console.log(resultat);

//nota bene : La place de la vatiation et console.log() ne change rien au resultat : 

//Ex : 

var resultat = adition(5);
console.log(resultat);

function adition(num){
    return num*5;
}







