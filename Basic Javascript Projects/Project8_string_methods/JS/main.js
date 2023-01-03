function full_sentence() {
    var part_1="I have";
    var part_2="made this";
    var part_3="into a complete";
    var part_4="sentece.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//---Slice Method---//

function slice_Method() {
    var Sentence = "Work hard play hard";   
    var Section = Sentence.slice(0,18);
    document.getElementById("Slice").innerHTML = Section;
}

// number methods

function string_Method() {
    var D = 9;
    document.getElementById("String").innerHTML = D.toString();
}

// precision

function precision_Method() {
    var X = 12444.3334339994421
    document.getElementById("Precision").innerHTML = X.toPrecision (10);
}