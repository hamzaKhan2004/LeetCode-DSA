/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustCount = new Map();
    let trustsSomeone = new Set();

    for (let i = 0; i < trust.length; i++) {
        let person = trust[i][0];
        let trustedPerson = trust[i][1];

        trustsSomeone.add(person);

        if (trustCount.has(trustedPerson)) {
            trustCount.set(
                trustedPerson,
                trustCount.get(trustedPerson) + 1
            );
        } else {
            trustCount.set(trustedPerson, 1);
        }
    }

    for (let person = 1; person <= n; person++) {
        if (
            (trustCount.get(person) || 0) === n - 1 &&
            !trustsSomeone.has(person)
        ) {
            return person;
        }
    }

    return -1;
};