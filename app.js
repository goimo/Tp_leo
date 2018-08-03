
// recuperer table d'objets
var liste = promo;
console.log(liste);

/*var para = document.createElement("p"); // permet de crée une balise P 

para.innerHTML = "Voici la liste de la promo";  // ce qu'il y a a l'interieur de ma balise <P> 
container.appendChild(para); // appendChild est l'enfant de container */

for(i = 0; i < liste.length; i++){ // crée la boucle pour recuperé les nom de tout le monde
	var para = document.createElement('p'); // crée la balise P 
	para.id = i; // ajoute un id a la variable para 
	para.addEventListener("click",function(){
		afficher(this.id);
	});
	document.getElementById("container").appendChild(para).innerHTML = liste[i].nom.toUpperCase();

	//j'affiche mon id container sur la page HTML, je place l'enfant de container en inscrivant ce qu'il y a dans la balise <p> , je selectionne les nom de la liste en MAJ

}

function afficher(identifiant){
		document.cookie = 'id=' + identifiant;
		window.location.replace("./liste.html");

}








