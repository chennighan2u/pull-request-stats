module.exports = (pulls, author) => {
  const count = pulls.filter((pull) => pull.author.id === author).length;
  return { author, count };
};
