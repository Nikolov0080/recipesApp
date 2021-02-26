const byLikes = (arr) => {
    return arr
        .sort((a, b) => {
            return b.likes.length - a.likes.length
        })
}

const byDifficulty = (arr) => {
    return arr
        .sort((a, b) => {
            return b.difficulty - a.difficulty
        })
}


const mostEasy = (arr) => {
    return arr
        .sort((a, b) => {
            return a.difficulty - b.difficulty
        })
}

const exit = {
    byLikes,
    byDifficulty,
    mostEasy
}
export default exit