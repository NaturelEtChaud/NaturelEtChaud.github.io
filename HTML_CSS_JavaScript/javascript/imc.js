function imc() {
    //on récupère les informations
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;
    
    //on calcule l'imc
    let calcul = poids / (taille*taille);
   
    //on donne la réponse
    let paragraphe = document.getElementById("a_remplir");
	let texte = prenom+" "+nom+",<br /> Ton IMC est de "+calcul;
    if (calcul<16.5){
      texte = texte + "<br /> Tu es dénutri.e";
    } else if (calcul<18.5){
      texte = texte + "<br /> Tu es maigre";
    } else if (calcul<25){
      texte = texte + "<br /> Tu as un poids normal";
    } else if (calcul<30){
      texte = texte + "<br /> Tu es en surpoids";
    } else if (calcul<35){
      texte = texte + "<br /> Tu es en situation d'obésité modérée";
    } else if (calcul<40){
      texte = texte + "<br /> Tu es en situation d'obésité sévère";
    } else {
     texte = texte + "<br /> Tu es en situation d'obésité massive";
    }
    paragraphe.innerHTML = texte;
}
