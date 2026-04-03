class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let answerMap = {}

        for (let singleString of strs) {

            let fillArray = new Array(26).fill(0)

            for (let singleChar of singleString) {
                fillArray[singleChar.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            const mapKey = fillArray.join(",")

            if (!answerMap[mapKey]) {
                answerMap[mapKey] = []
            }

            answerMap[mapKey].push(singleString)
        }

        return Object.values(answerMap)
    }
}
