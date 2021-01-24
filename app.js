const phrases = ["websites", "illustrations", "pancakes"];
let phraseSelect = 0; // = first phrase
let letterIndex = 0; // = first letter
let currentText = "";
let letters = "";


// iife: typing function
(function typing() {

    if (phraseSelect === phrases.length) {
        phraseSelect = 0; // reset counter
    }

    currentText = phrases[phraseSelect];
    letters = currentText.slice(0, ++letterIndex); // assigns first (0) to [letterIndex] value letters

    document.querySelector(".typing").textContent = letters;
    if (letters.length === currentText.length) {
        phraseSelect++;
        letterIndex = 0;
    }
    setTimeout(typing, 400);

}());