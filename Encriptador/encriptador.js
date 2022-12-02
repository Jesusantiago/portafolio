const inputUsuary = document.querySelector(".cuadro-texto");
const menssagefinish = document.querySelector(".cuadro-resultado");

function btnencriptar(){
    const textoEncriptado = encriptar(inputUsuary.value);
    menssagefinish.value = textoEncriptado;
    menssagefinish.style.backgroundImage = "none";
    inputUsuary.value = "";
}

function encriptar(stringEncriptada){
    var change = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(var i = 0; i < change.length; i++){
        if(stringEncriptada.includes(change[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(change[i][0],change[i][1])
        }
    }
    return stringEncriptada;
}

//Desencriptar 

function btndesencriptar(){
    const textoEncriptado = desencriptar(inputUsuary.value);
    menssagefinish.value = textoEncriptado;
    inputUsuary.value = "";
}

function desencriptar(stringDesencriptada){
    var change = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(var i = 0; i < change.length; i++){
        if(stringDesencriptada.includes(change[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(change[i][1],change[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar(){
    menssagefinish.select();
    navigator.clipboard.writeText(menssagefinish.value);
    menssagefinish.value = "";
}