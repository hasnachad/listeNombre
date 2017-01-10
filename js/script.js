/* Etape 3 : Je veux 200 cases de 1 à 200.
const SEUIL = 200;

for (var i = 1; i <= SEUIL; i++) {
	document.getElementById('liste').innerHTML += '<li>'+i+'</li>';
	alert();
}
*/

var seuil=prompt("combien de case voulez-vous?");
if (seuil<1000) {
for (var i = 1; i <= seuil; i++) {
	document.getElementById('liste').innerHTML += '<li>'+i+'</li>';
	
}}else{
	alert('Mauvaise saisie');/*empêche l'utilisateur */
}

	
