/**
 * Created by EQ on 30/01/2017.
 */
var lista = [];

var listaOrdenada;

var ordenarLista = function (listaDesordenada) {
    listaOrdenada = listaDesordenada.sort(function (a,b) {
        return a- b;
    });
}
function agregarALista() {

    var num;
    num = document.getElementById("numero").value;
    lista = function(){
        this.lista.push(num);
        console.log(num);
    }
    document.getElementById("listado").innerHTML=num +" \t";
    console.log(lista);
}

ordenarLista(lista);

function queNoSeRepita(lista){
    for (var i;  i<lista.length;i++){

    }
}