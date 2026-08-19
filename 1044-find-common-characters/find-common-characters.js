/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let common = new Array(26).fill(0);

    for (let char of words[0]) {
        common[char.charCodeAt(0) - 97]++;
    }

    for (let i = 1; i < words.length; i++) {
        let current = new Array(26).fill(0);

        for (let char of words[i]) {
            current[char.charCodeAt(0) - 97]++;
        }

        for (let j = 0; j < 26; j++) {
            common[j] = Math.min(common[j], current[j]);
        }
    }

    let result = [];

    for (let i = 0; i < 26; i++) {
        while (common[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            common[i]--;
        }
    }

    return result;
};