function Call_Loop() {
    var X = 1;
    while (X <10) {
        X+=1
    }
    document.getElementById("Loop").innerHTML = X;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture [0] = "running";
    Dog_Picture [1] = "fetching";
    Dog_Picture [2] = "walking";
    Dog_Picture [3] = "sleeping";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture [2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 90;
document.write(X);
{
    let X = 33;
    document.write ("<br>" + X);
}
document.write("<br>" + X);

function myFunction(name) {
    return "Hello " + name;
  }

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// brea/continue statements

function for_loop () {
    text = ""
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
      }
    document.getElementById("For").innerHTML = text;
}
text = ""
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
  }
  