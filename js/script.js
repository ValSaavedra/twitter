function agregar(){
	
}


var tareas = document.getElementById("tarea").value;
document.getElementById("tarea").value=""; //recupera la tarea y limpia textarea

var cont = document.getElementById("contenedor"); //guarda las tareas

var nuevasTareas = document.createElement("div");
var textoNuevaTarea = document.createTextNode(tareas);
var elementoContenedor = document.createElement("span");
//nuevos nodos elementos

elementoContenedor.appendChild(textoNuevaTarea);
nuevasTareas.appendChild(elementoContenedor);
cont.appendChild(nuevasTareas);
//asigna padres a los nodos

//crea checkbox e iconos y les da atributo y clase
var chck = document.createElement("input");
chck.type = "checkbox";
chck.setAttribute("class","check");
var basura = document.createElement("span");
basura.classList.add("fa","fa-trash-o");
var cora = document.createElement("span");
cora.classList.add("fa", "fa-heart");

nuevasTareas.appendChild(chck);
nuevasTareas.appendChild(basura);
nuevasTareas.appendChild(cora);
//asigna padres a nodos



