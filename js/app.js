do{
  var pickOne = prompt("Elige 1 si quieres cifrar una frase, y elige 2 si quieres descifrar una frase");// Por medio de este prompt podemos saber si el usuario quiere cifrar o descifrar alguna frase
  var phrase = prompt("Por favor Ingresa una frase sin espacios ni numeros");//obtenemos la frase cifrada o descifrada y la guardamos en la varible

console.log(phrase);

  if (pickOne ==1){  // Por medio de la condicional y de acuerdo a lo que contesta el usuario en la primer pegunta podemos dirigir al usuario a la opcion de cifrado o descifrado.
      cipher(phrase, 33);
  } else {
      decipher(phrase, 33);
  }
}while ((phrase) === " " || isNaN (phrase) === false);



function cipher(phrase){ // Con esta funcion cifraremos la frase ingresada por el usuario
  var str= "";// Aqui se guardara la frase cifrada
    for (var i = 0; i < phrase.length; i++) { //Iterar el string para poder obtener el numero de la letra dentro del codigo ascii para posteriormente poder recorrernos 33 espacios.
      var codeNumber = phrase.charCodeAt(i); // charCodeAt nos devuelve un número indicando el valor Unicode del carácter en el índice proporcionado el cual estaremos iterando (i).
      var letterMay = (codeNumber - 65 + 33) % 26 + 65;
      var letterMin = (codeNumber - 97 + 33) % 26 + 97;

        if (codeNumber >= 65 && codeNumber <= 90) {
          str += String.fromCharCode(letterMay);

        } else {
          (codeNumber >= 97 && codeNumber <= 122)
          str += String.fromCharCode(letterMin);
        }
    }

    document.write("Tu frase cifrada es " + str); //Imprimimos en la pantalla la frase cifrada para el usuario que guardamos en la variable str.
}

  function decipher(cipher){
    var str= "";
      for (var i = 0; i < phrase.length; i++) {
        var codeNumber = phrase.charCodeAt(i);
        var letterMay = (((codeNumber + 65 - 33) % 26)+ 65);
        var letterMin = (((codeNumber + 85 - 33) % 26)+ 97);

          if (codeNumber >= 65 && codeNumber <= 90) {
            str += String.fromCharCode(letterMay);

          } else {
            (codeNumber >= 97 && codeNumber <= 122)
            str += String.fromCharCode(letterMin);
          }
      }

      document.write("Tu frase descifrada es " + str);
  }
