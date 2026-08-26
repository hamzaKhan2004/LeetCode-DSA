class Solution {
    public int findJudge(int n, int[][] trust) {
        Map<Integer, Integer> trustCount = new HashMap<>();
        Set<Integer> trustsSomeone = new HashSet<>();

        for (int i = 0; i < trust.length; i++) {
            int person = trust[i][0];
            int trustedPerson = trust[i][1];

            trustsSomeone.add(person);

            if (trustCount.containsKey(trustedPerson)) {
                trustCount.put(
                    trustedPerson,
                    trustCount.get(trustedPerson) + 1
                );
            } else {
                trustCount.put(trustedPerson, 1);
            }
        }

        for (int person = 1; person <= n; person++) {
            if (trustCount.getOrDefault(person, 0) == n - 1 &&
                !trustsSomeone.contains(person)) {
                return person;
            }
        }

        return -1;
    }
}