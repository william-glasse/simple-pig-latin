const pigIt = (words) => {
    const wordArray = words.split(" ");
    const pigifiedWordsArray = wordArray.map((w) => {
        let firstCharacterMovedToEnd = w.slice(1) + w[0];
        return firstCharacterMovedToEnd += 'ay'
    })
    const pigifiedWords = pigifiedWordsArray.join(" ")
    return pigifiedWords
}

module.exports = pigIt;
