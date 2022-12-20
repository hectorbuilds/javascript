//--Below is a global variable--//

var X = 9;
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+99);
}
Add_numbers_1();
Add_numbers_2();

//--Below is a local variable--//

function Add_numbers_1() {
    var X = 10;
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
    }
Add_numbers_1();
Add_numbers_2();

//--Below console--//

function Add_numbers_1() {
    var X = 10;
    console.log(15+X);
}
function Add_numbers_2() {
    console.log(X+100);
}
Add_numbers_1();
Add_numbers_2();

//--get hours--//
function get_Date() {
    if(new Date().getHours<9) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}