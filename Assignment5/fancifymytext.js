// Function to increase text area font size and display alert
function performActions() {
    increaseFontSize(); 
    showAlert(); 
}

// Function to display an alert message
function showAlert() {
    alert("Hello, world!");
}

// Function to change text area font size to 24pt
function increaseFontSize() {
    var textInput = document.getElementById("textInput");
    if (showAlert){
        document.getElementById("textInput").style.fontSize = "24pt";
        textInput.style.backgroundColor = "#73edc0"
    } else {
        textInput.style.backgroundColor = "white"
    }
   

}

// Function to apply text area styles based on selected radio button
function applyStyle() {
    var fancyRadio = document.getElementById("fancyRadio");
    var textInput = document.getElementById("textInput");

    if (fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "inherit";
        textInput.style.textDecoration = "none";
    }
}

// Function to uppercase text and add "-Moo" suffix to last word of each sentence
function makeTextMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;

    textInput.value = text.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            var lastWordIndex = words.length - 1;
            words[lastWordIndex] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textInput.value = sentences.join(".");
}
