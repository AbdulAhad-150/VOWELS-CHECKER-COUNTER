function checkVowels() {
    var text = document.getElementById("inputText").value;

    var vowelCount = 0;

    // convert it into lowercase

    text = text.toLowerCase();


    for (var i = 0; i < text.length; i++) {

        var char = text.charAt(i);

        if (isVowels(char)) {
            vowelCount++;
        }

    }
    var results = document.getElementById("result");
    results.textContent = "Total Vowels : " + vowelCount;
}
function isVowels(char) {
    let vowel = ["a","e","i","o","u"];
    return vowel.includes(char);
}