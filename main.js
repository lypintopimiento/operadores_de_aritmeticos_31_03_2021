function incremento(num){
    console.warn('Incremento');
    ++num;//Pre Incremento
    num++;//Pre Incremento
    console.log(num);
}
function decremento(num){
    console.warn('Decremento');
    --num; //Pre decremento
    num--;//Pos decremento
    console.log(num);
}
function sumaEjemplo(){
    console.warn('sumaEjemplo');
    // suma de datos tendiendo en cuenta el operacdor de adicion (Concatenacion)
    let num = parseInt(prompt("Ingrese el numero 1"));
    let num2 = parseInt(prompt("Ingrese el numero 2"));
    let num3 = prompt("Ingrese el numero 3");
    let num4 = parseInt(prompt("Ingrese el numero 4"));
    console.log(num, typeof(num));
    console.log(num2, typeof(num2));
    console.log(num3, typeof(num3));
    console.log(num4, typeof(num4));
    let res = 0;
    console.log(num + num2 + num3 + num4);
}
function calculadoraSignosBasicos(num){
    console.warn('calculadoraSignosBasicos');
    console.log(num-2); //Resta
    console.log(num+2); //Suma
    console.log(num/2); //Divicion
    console.log(num*2); //Multiplicacion
    console.log(num**2); //Exponenciación
}
function ejemploUnary(num, num2){
    console.warn('ejemploUnary');
    console.log( - (- (num + (-num2) - 5) ) + 3 );
}
function unaryNegativo(num, num2){
    console.warn('unaryNegativo');
    console.log(-num); //Unary Negativo (reglas de signos)
    console.log(-(num2));//Unary Plus (reglas de signos)
    ejemploUnary(num, num2);
}
function unaryPositivo(num, num2){
    console.warn('unaryPositivo');
    console.log(+num); //Unary Negativo (reglas de signos)
    console.log(+(num2));//Unary Plus (reglas de signos)
    ejemploUnary(num, num2);
}
decremento(5);
incremento(5);
// sumaEjemplo();
calculadoraSignosBasicos(10);
unaryNegativo(10, -2);
unaryPositivo(-10, 2);

