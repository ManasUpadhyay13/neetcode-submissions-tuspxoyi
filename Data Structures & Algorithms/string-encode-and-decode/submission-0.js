class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = ''
        strs.forEach((str) => {
            let length = str.length
            ans+= `${length}#${str}`
        })

        return ans
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // find the #
            while (str[j] !== '#') {
                j++;
            }

            // get length
            let length = parseInt(str.slice(i, j));

            // move j to start of string
            j++;

            // extract string
            let word = str.slice(j, j + length);
            ans.push(word);

            // move pointer
            i = j + length;
        }

        return ans;
    }
}
