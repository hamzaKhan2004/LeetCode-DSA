/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let set = new Set();
   let left = 0;
   let right = 0;
   let longest = 0;
   while(right < s.length){
    if(!set.has(s[right])){
        set.add(s[right]);
        longest = Math.max(longest,right - left + 1)
        right++;
    }else{
        set.delete(s[left]);
        left++;
    }
   }
   return longest;
};