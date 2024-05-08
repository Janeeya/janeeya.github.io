(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    const encryptButton = document.getElementById("encryptButton");
    encryptButton.addEventListener("click", handleClick);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", handleReset);

    console.log("Window loaded!");
  }

  function handleClick() {
    const inputTextArea = document.getElementById("inputText");
    const outputParagraph = document.getElementById("result");

    if (inputTextArea.value) {
      const encryptedText = shiftCipher(inputTextArea.value);
      outputParagraph.textContent = encryptedText;
    }
  }

  function handleReset() {
    const inputTextArea = document.getElementById("inputText");
    const outputParagraph = document.getElementById("result");

    inputTextArea.value = "";
    outputParagraph.textContent = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] === 'z') {
        result += 'a';
      } else { 
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
