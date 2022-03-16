// Apartado 2 
function display() {
	var respuesta = confirm("¿Presentar zona oculta?");
	var bloque = document.getElementById("oculta");
	if (respuesta) {
		bloque.style.display = "block";
	}
	else {
		bloque.style.display = "none";
	}
}