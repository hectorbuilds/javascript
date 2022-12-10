function my_Dictionary(){
    var Instrument= {
        Species:"Guitar",
        Color:"Black",
        Brand:"Fender",
        Made:1997,
        Sound: "Distorted!"
    };
    delete Instrument.Sound;
    document.getElementById("Dictionary").innerHTML = Instrument.Sound;
}