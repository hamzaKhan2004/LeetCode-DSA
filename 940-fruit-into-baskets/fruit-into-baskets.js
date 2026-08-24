/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < fruits.length; right++) {
        map.set(
            fruits[right],
            (map.get(fruits[right]) || 0) + 1
        );

        while (map.size > 2) {
            let fruit = fruits[left];

            map.set(fruit, map.get(fruit) - 1);

            if (map.get(fruit) === 0) {
                map.delete(fruit);
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};