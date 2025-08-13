var mergeAlternately = function(word1, word2) {
    let i =0;
    let j=0;
    let arr =[]

    while (i<word1.length || j<word2.length){
        if(i<word1.length){
            arr.push(word1[i]);
            i++;
        }

        if(j<word2.length){
            arr.push(word2[j]);
            j++;
        }


    }
    return arr.join("");
};