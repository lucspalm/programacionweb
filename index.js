var tarea=document.getElementById('lista');
var listas=[]

function AgregarTarea(){
    var lista=document.getElementById('lista');
    var valor=lista.value;
    if(valor==""){
        alert("Ingrese tarea por favor");
        document.getElementById("lista").focus();
    }else{
        listas.push(valor.trim());
        lista.value='';
        MostrarLista();
    }
}

function MostrarLista(){
    var dato='';
    if(listas.length>0){
        for(var i=0;i<listas.length;i++){
            dato+="<li class='item'><input type='checkbox' class='tachar'><span>"+listas[i]+"</span><button class ='eliminar' onclick='BorrarTarea("+i+")'>Eliminar</button></li>";
        } 
    }
    document.getElementById('resultado').innerHTML = dato;
}

function BorrarTarea(lista){
    listas.splice(lista,1);
    MostrarLista();
}