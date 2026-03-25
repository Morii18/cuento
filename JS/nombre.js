let nombre = prompt("¿Cómo te llamás?");
let camino = prompt("A " + nombre +" la llaman: Aceptar o Rechazar ");

if (camino == "Aceptar") {
    let accion = prompt("Le ofrecen ir a una cabaña en la montaña ¿ ir o no ir?")
    if (accion == "no ir") 
        alert (nombre + " te salvaste")
}
    if (accion == "ir"){
        let muerte = prompt(nombre + " llega al lugar y hay olor a cadáver: entrar o no?" )
            if(muerte == "entrar"){
                alert("A " + nombre + " la mato un asesino dentro de la cabaña") }
                
}

else if (camino == "Rechazar"){
    alert(nombre + " te has salvado")
}
