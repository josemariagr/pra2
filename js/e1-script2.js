/*
	Apartado 3
	
	En la solucion proporcionada hay más formas de obtener lo mismo
*/

function apartado3(){
	var lista = document.getElementsByClassName("elemento");
	var i;
	
	for (i=0; i < lista.length; i++){
		
		//Asociamos el evento click sobre los elementos de la lista	
		lista[i].onclick = function(){  					
			texto=prompt("¿Nuevo Item?");
			
			/* He añadido que si no se introduce texto se queda igual
			  y si le damos al boton cancelar se pone en blanco */
			if(texto != ""){
				this.innerHTML=texto;
				return true;
			}else{
				alert("No se ha introducido texto");
				return false;
			}
		};		
	}	
}

/*	Apartado 4  */

function apartado4(){
	
	var lista1 = document.getElementsByTagName("p");
	var x;
	
	for (x = 0; x < lista1.length; x++) {
		lista1[x].onmouseenter= function () {
			//Se crea una nueva propiedad llamada colorOriginal, para guardar el color original.
			this.colorOriginal=this.style.backgroundColor;
			this.style.backgroundColor = "green";
		};
		
		//Cuando dejamos de poner encima el raton, vuelve al color original
		lista1[x].onmouseleave=function () {
			this.style.backgroundColor = this.colorOriginal;
		};
	}
}

/*	Apartado 5  */

function apartado5(){
	
	var lista2 = document.getElementsByTagName("img");
	var y;
	
	for (y = 0; y < lista2.length; y++) {
		//Al hacer click sobre la imagen ejecutamo la funcion
		lista2[y].onclick = function(){
			//Vamos a obtener la variable tamaño para ponerla por defecto en el prompt
			var tamano = this.height;
			tamano = prompt("Altura (en px):", tamano);
			//Vamos a cambiar la variable que hemos introducido nueva para cambiar el tamano de la imagen
			this.height = tamano;			
		}		
	}	
}

//Ejecutamos la funcion para que funcione en nuestro documento
apartado3();
apartado4();
apartado5();