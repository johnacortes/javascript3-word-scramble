let secuenciaRandom = [];

let inputsSelecionados = [];

let letrasIngresadas = [];

function generarPalabra() {
    
    if(secuenciaRandom.length >= 1) {
        document.getElementById("palabra" + secuenciaRandom[secuenciaRandom.length - 1]).classList.add("display-none"); 
    }
    if(secuenciaRandom.length < 1) {
        document.getElementById("input1").classList.remove("display-none");
        document.getElementById("input2").classList.remove("display-none");
    }
    focusInputs();
    let numRandom = Math.floor(Math.random() * 10) + 1;
    
    if(secuenciaRandom.includes(numRandom)) {
        generarPalabra();
    } else {
        document.getElementById("palabra" + numRandom).classList.remove("display-none");
        secuenciaRandom.push(numRandom);
        registrarLetras();
        usarInputs(numRandom);
        verificar();
        cambioColorContador();
       }  
    
    let input1 = document.getElementById("input1");
    input1.value = "";
    let input2 = document.getElementById("input2");
    input2.value = "";
    
    if(secuenciaRandom.length === 6) {
        document.getElementById("palabra" + numRandom).classList.add("display-none");
        document.getElementById("input1").classList.add("display-none");
        document.getElementById("input2").classList.add("display-none");
        document.getElementById("relowf").innerHTML = "reset";
    }
    if(secuenciaRandom.length === 7) {
        restablecer();
    }
}

function registrarLetras() {
    if(secuenciaRandom.length >= 1) {
        let letra1 = document.getElementById("input1").value.toLowerCase();
        letrasIngresadas.push(letra1);
        let letra2 = document.getElementById("input2").value.toLowerCase();
        letrasIngresadas.push(letra2);
    }
}

function verificar() {
    if(letrasIngresadas[letrasIngresadas.length - 2] === inputsSelecionados[inputsSelecionados.length - 4] && letrasIngresadas[letrasIngresadas.length - 1] === inputsSelecionados[inputsSelecionados.length - 3]) {
        document.getElementById("em").innerHTML += "☑️ ";
    } else if(letrasIngresadas.length === 2) {
        document.getElementById("em").innerHTML += "";
    } else {
        document.getElementById("em").innerHTML += "❌ ";
    }
    }
    
    function usarInputs(valor) {
        switch(valor) {
            case 1 :
                inputsSelecionados.push("e");
                inputsSelecionados.push("r");
                document.getElementById("relowf").innerHTML = "Flow";
                break;
    
            case 2 :
               inputsSelecionados.push("e");
               inputsSelecionados.push("t");
               document.getElementById("relowf").innerHTML = "Plan";
               break;
        
            case 3 :
               inputsSelecionados.push("s");
               inputsSelecionados.push("e");
               document.getElementById("relowf").innerHTML = "Mou";
               break;
                
            case 4 :
               inputsSelecionados.push("l");
               inputsSelecionados.push("e");
               document.getElementById("relowf").innerHTML = "App";
               break;      
               
            case 5 :
               inputsSelecionados.push("i");
               inputsSelecionados.push("c");
               document.getElementById("relowf").innerHTML = "Mus";
               break;
            
            case 6 :
               inputsSelecionados.push("l");
               inputsSelecionados.push("e");
               document.getElementById("relowf").innerHTML = "Purp";
               break;      
    
             case 7 :
               inputsSelecionados.push("e");
               inputsSelecionados.push("r");
               document.getElementById("relowf").innerHTML = "Butt";
               break;
    
            case 8 :
               inputsSelecionados.push("r");
               inputsSelecionados.push("a");
               document.getElementById("relowf").innerHTML = "Came";
               break;
    
            case 9 :
               inputsSelecionados.push("a");
               inputsSelecionados.push("r");
               document.getElementById("relowf").innerHTML = "Guit";
               break;
    
            case 10 :
               inputsSelecionados.push("n");
               inputsSelecionados.push("a");
               document.getElementById("relowf").innerHTML = "Bana";
               break;
    
            default:
                console.log("");
        }
    
    }

function cambioColorContador() {
    if(secuenciaRandom.length === 1) {
    document.getElementById("span1").classList.add("fondo-azul");
    document.getElementById("tries").innerHTML = "Tries(1/5):";
} else if(secuenciaRandom.length === 2) {
    document.getElementById("span2").classList.add("fondo-azul");
    document.getElementById("tries").innerHTML = "Tries(2/5):";
} else if(secuenciaRandom.length === 3) {
    document.getElementById("span3").classList.add("fondo-azul");
    document.getElementById("tries").innerHTML = "Tries(3/5):";
} else if(secuenciaRandom.length === 4) {
    document.getElementById("span4").classList.add("fondo-azul");
    document.getElementById("tries").innerHTML = "Tries(4/5):";
} else if(secuenciaRandom.length === 5) {
    document.getElementById("span5").classList.add("fondo-azul");
    document.getElementById("tries").innerHTML = "Tries(5/5):";
}
}

function restablecer(valor) {
    inputsSelecionados = [];
    letrasIngresadas = [];
    alert("Reiniciando!");
    document.getElementById("span1").classList.remove("fondo-azul");
    document.getElementById("span2").classList.remove("fondo-azul");
    document.getElementById("span3").classList.remove("fondo-azul");
    document.getElementById("span4").classList.remove("fondo-azul");
    document.getElementById("span5").classList.remove("fondo-azul");

    document.getElementById("input1").classList.add("display-none");
    document.getElementById("input2").classList.add("display-none");

    document.getElementById("palabra" + secuenciaRandom[secuenciaRandom.length - 1]).classList.add("display-none"); 
    secuenciaRandom = [];

    document.getElementById("em").innerHTML = "";
    document.getElementById("relowf").innerHTML = "relowf";
    document.getElementById("tries").innerHTML = "Tries(0/5):";
}

function focusInputs() {
    document.getElementById("input1").focus();
    document.getElementById("input1").addEventListener("input", function() {
        if(/[a-zA-Z]/.test(document.getElementById("input1").value)) {
            document.getElementById("input2").focus();
        }
        });
    document.getElementById("input2").addEventListener("input", function() {
       if(document.getElementById("input2").value === "") {
        document.getElementById("input1").focus();
        document.getElementById("input1").value = "";
       }
    });   
      
}





    
play.addEventListener('timeupdate', function() {
    let currentTime = play.currentTime;
    let duration = play.duration;
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    let totalMinutes = Math.floor(duration / 60);
    let totalSeconds = Math.floor(duration % 60);
    
    currentTimeDisplay.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
    totalTime.textContent = totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;
    
    
    barTime.value = (currentTime / duration) * 100;
    
  });
