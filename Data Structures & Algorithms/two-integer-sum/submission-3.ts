class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // make a hash map to store the visited values + its index
        const map = new Map<number, number>();

        // check the difference btw target and current value
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            // if that diff exists in the has map, that's the return pair
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            // if not, store the value in the hash map to check against
            // another value later.
            map.set(nums[i], i);
        }
        return [];
    }
}
