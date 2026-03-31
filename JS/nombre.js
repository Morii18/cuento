function CUENTO(){
let nombre = prompt("¿Cómo te llamás?");
let camino = prompt("A " + nombre +" la llaman: Aceptar o Rechazar ");

if (camino === "Aceptar") {
    let accion = prompt("te dicen de ir a una cabaña en la montaña sola por unos dias: ¿ ir o no ir?");
        if (accion === "ir"){
            let final = prompt(nombre + " ya se encuentra en la cabaña, pero hay olor a cadaver:¿Entrar o salir corriendo");
            if (final === "Entrar"){
                alert("Detras de la puerta se encontraba un asesino, te mata. " + nombre + " has perdido")
            } else if(final === "salir corriendo"){
                let correr = prompt("Sales corriendo a un lugar que parece seguro, intentas pedri ayuda? si o no?");
            if(correr === "si"){
                    alert(nombre + " no hay señal, los ruidos de la cabaña eran un asesino te encuentra y muertes, FINAL.");
                } else if (correr === "no") {
                    alert(nombre + " Mueres" );
                }
                } 
            } else if(accion === "no ir"){
                alert(nombre + " respondes amablemnte que no puedes ir, te salvaste!!");
        }
    }
else if(camino == "Rechazar"){
    alert(nombre + " te has salvado");
}
}




