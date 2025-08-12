var reverseString = function(s) {
    let left = 0;                  // Pointer starting from the first character
    let right = s.length - 1;      // Pointer starting from the last character

    while (left < right) {
        // Store the left character temporarily
        let temp = s[left];

        // Swap left and right characters
        s[left] = s[right];
        s[right] = temp;

        // Move both pointers towards the center
        left++;
        right--;
    }
};