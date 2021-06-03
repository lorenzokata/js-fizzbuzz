// for (var i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log(i + " Fizz");
//     } else if (i % 5 == 0) {
//         console.log(i + " Buzz");
//     } else{
//         console.log(i);
//     }
// }


var numero = "";

for (var i = 1; i <= 100; i++) {

    numero = i;

    if (i % 3 == 0) {
        numero = numero + "Fizz";
    }
    
    if (i % 5 == 0) {
        numero = numero + "Buzz";
    }

    if (i % 6 == 0) {
        numero = numero + "Boolean";
    }

    console.log(numero);
}