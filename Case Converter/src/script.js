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
        const words = text.split(" ");

        const result = [];
        for (let word of words) {
            result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
        document.getElementById("text").value = result.join(" ");
    });

document.getElementById("sentence-case")
    .addEventListener("click", function () {
        const text = document.getElementById("text").value;
        const sentences = text.split(". ");

        const result = [];
        for (let sentence of sentences) {
            result.push(sentence[0].toUpperCase() + sentence.slice(1).toLowerCase());
        }
        document.getElementById("text").value = result.join(". ");
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
