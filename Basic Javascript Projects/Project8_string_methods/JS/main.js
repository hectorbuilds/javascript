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
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}