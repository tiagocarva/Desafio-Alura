function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';  // Redefine a altura
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta a altura para o conteúdo
}

function encryptText() {
    let inputText = document.getElementById("input-text");
    let outputText = document.getElementById("output-text");
    let encryptedText = inputText.value.replace(/e/g, "enter")
                                       .replace(/i/g, "imes")
                                       .replace(/a/g, "ai")
                                       .replace(/o/g, "ober")
                                       .replace(/u/g, "ufat");
    outputText.value = encryptedText;
    adjustTextareaHeight(outputText); // Ajusta a altura após alteração
}

function decryptText() {
    let inputText = document.getElementById("input-text");
    let outputText = document.getElementById("output-text");
    let decryptedText = inputText.value.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");
    outputText.value = decryptedText;
    adjustTextareaHeight(outputText); // Ajusta a altura após alteração
}

function copyToClipboard() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

// Ajusta a altura do textarea de entrada conforme o usuário digita
document.getElementById("input-text").addEventListener("input", function() {
    adjustTextareaHeight(this);
});
