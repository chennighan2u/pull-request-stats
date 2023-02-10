module.exports = (pulls, author) => pulls.filter((pull) => pull.author.id === author);
