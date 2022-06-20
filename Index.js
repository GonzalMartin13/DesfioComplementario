let nombre = prompt("Hola, bienvenido al desafio compelmentario. Como te llamas?");
alert ("Hola " + nombre + ", estas preparado para los elefantes?");


//bucle for 

let elefantes = parseInt(prompt("Cuantos elefantes soporta la telaraña?"));
let tela;

for (tela=1; tela<=elefantes; tela++){
    alert(tela + " elefantes se columpiaban sobre la tela de una araña");

}

alert ("La telaraña soporto " + (tela - 1) + " elefantes antes de romperse");

