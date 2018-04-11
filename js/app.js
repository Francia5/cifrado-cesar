do{
  var pickOne = prompt("Elige 1 si quieres cifrar una frase \nElige 2 si quieres descifrar una frase");// Por medio de este prompt podemos saber si el usuario quiere cifrar o descifrar alguna frase
  var phrase = prompt("Por favor Ingresa una frase sin espacios ni numeros");//obtenemos la frase cifrada o descifrada y la guardamos en la varible

console.log(phrase);

  if (pickOne ==1){  // Por medio de la condicional y de acuerdo a lo que contesta el usuario en la primer pegunta podemos dirigir al usuario a la opcion de cifrado o descifrado.
      cipher(phrase, 33);
  } else {
      decipher(phrase, 33);
  }
}while ((phrase) === " " || isNaN (phrase) === false); // Si encuentra un espacio vacio o un numero en la frase seguira preguntando hasta ingresar la frase de la manera solicitada.



function cipher(phrase){ // Con esta funcion cifraremos la frase ingresada por el usuario
  var str= "";// Aqui se guardara la frase cifrada
    for (var i = 0; i < phrase.length; i++) { //Iterar el string para poder obtener el numero de la letra dentro del codigo ascii para posteriormente poder recorrernos 33 espacios.
      var codeNumber = phrase.charCodeAt(i); // charCodeAt nos devuelve un número indicando el valor Unicode del carácter en el índice proporcionado el cual estaremos iterando (i).
      var letterMay = (codeNumber - 65 + 33) % 26 + 65;
      var letterMin = (codeNumber - 97 + 33) % 26 + 97;

        if (codeNumber >= 65 && codeNumber <= 90) { //Condicionamos y seccionamos, si codeNumber es mayor o igual a la posicion 65 o menor o igual que 90 en el codigo ASCII seran letras Mayusculas.
          str += String.fromCharCode(letterMay);

        } else {
          (codeNumber >= 97 && codeNumber <= 122) //Condicionamos y seccionamos, si codeNumber es mayor o igual a la posicion 97 o menor o igual que 122 en el codigo ASCII seran letras Minisculas.
          str += String.fromCharCode(letterMin);
        }
    }

    console.log(str); // str Nos muestra la frase cifrada
    document.write("Tu frase cifrada es " + str); //Imprimimos en la pantalla la frase cifrada para el usuario que guardamos en la variable str.
}

  function decipher(cipher){ // Por medio de esta funcion descifraremos la frase que el usuario ingrese
    var str= ""; //Aqui se guardara la frase descifrada
      for (var i = 0; i < phrase.length; i++) { //Iterar el string para poder obtener el numero de la letra dentro del codigo ascii para posteriormente poder recorrernos 33 espacios.
        var codeNumber = phrase.charCodeAt(i);
        var letterMay = (((codeNumber + 65 - 33) % 26)+ 65); //En el caso de la funcion descifrar requerimos recorrernos hacia la izquierda 33 espacios ya que en el anterior los avanzamos.
        var letterMin = (((codeNumber + 85 - 33) % 26)+ 97);

          if (codeNumber >= 65 && codeNumber <= 90) { //Condicionamos y seccionamos, si codeNumber es mayor o igual a la posicion 65 o menor o igual que 90 en el codigo ASCII seran letras Mayusculas.
            str += String.fromCharCode(letterMay);

          } else {
            (codeNumber >= 97 && codeNumber <= 122) //Condicionamos y seccionamos, si codeNumber es mayor o igual a la posicion 97 o menor o igual que 122 en el codigo ASCII seran letras Minisculas.
            str += String.fromCharCode(letterMin);
          }
      }

      console.log(decipher); // str Nos muestra la frase descifrada
      document.write("Tu frase descifrada es: " + str); //Imprimimos en la pantalla la frase descifrada para el usuario que guardamos en la variable str.
  }
