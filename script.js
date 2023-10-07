const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("count");

function countWords() {
    const text = textInput.value.trim();
    const words = text.split(" ");
    const wordCountValue = text === "" ? 0 : words.length;
    wordCount.textContent = wordCountValue;
}

countWords();