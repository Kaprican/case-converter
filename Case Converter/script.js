const sentenceSplitter = /\.\s*(\S)/gmi;
const wordSplitter = /\s+(\S)/gmi;

document.getElementById("upper-case")
    .addEventListener("click", function () {
        let text = document.getElementById("text").value;
        document.getElementById("text").value = text.toUpperCase();
    });


document.getElementById("lower-case")
    .addEventListener("click", function () {
        const text = document.getElementById("text").value;
        document.getElementById("text").value = text.toLowerCase();
    });


document.getElementById("proper-case")
    .addEventListener("click", function () {
        const text = document.getElementById("text").value;
        let result = text.replace(wordSplitter, (firstLetter) => firstLetter.toUpperCase());

        document.getElementById("text").value = result[0].toUpperCase() + result.slice(1);
    });


document.getElementById("sentence-case")
    .addEventListener("click", function () {
        const text = document.getElementById("text").value;
        let result = text.replace(sentenceSplitter, (firstLetter) => firstLetter.toUpperCase());

        document.getElementById("text").value = result[0].toUpperCase() + result.slice(1);
    });


document.getElementById("save-text-file")
    .addEventListener("click", function () {
        download("text.txt", document.getElementById("text").value);
    });


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
