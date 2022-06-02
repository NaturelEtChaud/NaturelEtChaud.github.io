function leibniz(){
	var s = 0
	if (document.getElementById("b0").checked){s += 1}
	if (document.getElementById("b1").checked){s += 2}
	if (document.getElementById("b2").checked){s += 4}
	if (document.getElementById("b3").checked){s += 8}
	if (document.getElementById("b4").checked){s += 16}
	if (document.getElementById("b5").checked){s += 32}
	if (document.getElementById("b6").checked){s += 64}
	if (document.getElementById("b7").checked){s += 128}
	document.getElementById("nombre").innerHTML = s
}
