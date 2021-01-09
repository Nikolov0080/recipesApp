const byLikes = (arr) => {
    return arr
        .sort((a, b) => {
            return b.likes.length - a.likes.length
        })
        .slice(0, 6);
}

const byDifficulty = (arr) => {
    return arr
        .sort((a, b) => {
            return b.difficulty - a.difficulty
        })
        .slice(0, 6);
}


const mostEasy = (arr) => {
    return arr
        .sort((a, b) => {
            return a.difficulty - b.difficulty
        })
        .slice(0, 6);
}
export default {
    byLikes,
    byDifficulty,
    mostEasy
}