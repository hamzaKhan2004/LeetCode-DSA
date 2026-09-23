/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map();
    for(let i = 0; i < text.length; i++){
        if(map.has(text[i])){
            map.set(text[i],map.get(text[i]) + 1);
        }else{
            map.set(text[i], 1);
        }
    }

    return Math.min(
        map.get("b") || 0,
        map.get("a") || 0,
        Math.floor(map.get("l") / 2) || 0,
        Math.floor(map.get("o") / 2) || 0,
        map.get("n") || 0,
    );
};