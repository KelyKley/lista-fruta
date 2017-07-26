function añadirLista() {

      var tarea = document.getElementById('añadir').value;
      var texto = document.createTextNode(tarea);
      var nuevaTarea = document.createElement("li");
      nuevaTarea.appendChild(texto);
      if(tarea == ""){
        alert("Escribe una tarea");
      } else{
        document.getElementById("tarea").appendChild(nuevaTarea);
      }
    }   


var arrayDatos =[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  } ];

var html = "";
   for (var i =0; i<arrayDatos.length;i++){
      var dato_1 = arrayDatos[i];
      var s ='<ul >'+"<li>"+ dato_1.title +"</li>"+"</ul>";
        html += s;
      //contentEditable="true"
 }
  document.getElementById("mostrar").innerHTML=html;

var tachado = document.getElementsByTagName('ul');
  for (var i = 0; i < tachado.length; i++) {
    tachado[i].addEventListener('click',linea,false);
  }

function linea(){
  (event.target).style.textDecoration = ((event.target).style.textDecoration=='line-through') ? 'transparent' : 'line-through';  
}

var editar=document.getElementsByTagName('ul');
  for(var i=0; i< editar.length; i++){
    editar[i].addEventListener('dblclick',editarTexto,false);
}

function editarTexto(){
  (event.target).contentEditable = ((event.target).contentEditable==true) ? false : true;
}


    //document.createTextNode > crea nodo de texto, con el contenido especificado.

    //appendChild(nuevo hijo) > añade  el hijo al final de todos los hijos actuales.
