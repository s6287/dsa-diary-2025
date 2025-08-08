var reverseString = function(s) {
    let str = s.join('');
    let arr = str.split("").reverse();

    for (let i = 0; i < s.length; i++) {
        s[i] = arr[i];
    }
};