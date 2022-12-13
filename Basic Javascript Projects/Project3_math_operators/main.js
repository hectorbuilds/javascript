function add(){
 var A =5+4
 document.getElementById("Math").innerHTML=A
}
function subtraction (){
    var subtraction = 30-3;
    document.getElementById("Math 2").innerHTML=subtraction
}
function multiplication(){
    var multiplication = 9*10;
    document.getElementById("Math 3").innerHTML= multiplication
}
function division(){
    var division= 5/15;
    document.getElementById("Math 4").innerHTML= division
}
function algebra(){
    var alg= (5+9)-(30-3)+(9*10)-(5/15);
    document.getElementById("Math 5").innerHTML= alg
}
function modulus_Operator(){
    var remainOperator= 72%9;
    document.getElementById("Math 6").innerHTML= remainOperator
}
function negation_Operator(){
    var T=10
    document.getElementById("Math 7").innerHTML= -T;
}
function increment (){
    var X = 9
    X++;
    document.write(X);
}
function decrement (){
    var X = 9
    X--;
    document.write(X);
}
//below is the dictionary function//
function my_dictionary(){
    var Animal= {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}