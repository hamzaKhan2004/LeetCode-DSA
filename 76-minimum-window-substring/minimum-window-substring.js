/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let required = new Map();
    let window = new Map();

    for (let i = 0; i < t.length; i++) {
        required.set(t[i], (required.get(t[i]) || 0) + 1);
    }

    let left = 0;
    let formed = 0;
    let requiredCount = required.size;
    let minLength = Infinity;
    let start = 0;

    for(let right = 0; right < s.length; right++){
        let char = s[right];
        window.set(char, (window.get(char) || 0) + 1);
        
        if (
            required.has(char) &&
            window.get(char) === required.get(char)
        ) {
            formed++;
        }

        
        while(formed === requiredCount){

            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }
            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            if (
                required.has(leftChar) &&
                window.get(leftChar) < required.get(leftChar)
            ) {
                formed--;
            }

            left++;
        } 
    }
    

    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};