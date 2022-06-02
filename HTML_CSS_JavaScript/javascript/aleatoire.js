function alea() {
    //entrées
    let nbfaces = document.getElementById("nb_faces").value;
    let nblancers = document.getElementById("nb_lancers").value;
    
    //sortie
    let paragraphe = document.getElementById("a_remplir");
    
    let lancer;
    let texte = "Le résultat des lancers sont :</br>"
    for (let i=0; i<nblancers; i++){
      lancer = Math.floor((Math.random() * nbfaces) + 1);
      texte = texte + lancer + "</br>"
    }
	
    paragraphe.innerHTML = texte;
}
