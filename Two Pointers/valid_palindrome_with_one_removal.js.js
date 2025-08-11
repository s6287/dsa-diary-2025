
var validPalindrome = function(s) {
    function palindrome(l,r){
        while(l<r){
            if(s[l] !==s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    let left =0; let right=s.length-1;
    while(left<right){
        if(s[left] !== s[right]){
            return palindrome(left +1 ,right) || palindrome(left, right-1)      
       }
       left ++;
       right --;
    }
    return true;
};