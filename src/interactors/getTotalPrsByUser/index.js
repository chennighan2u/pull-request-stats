module.exports = (pulls, authorId) => {
  const count = pulls.filter((pull) => pull.author.id === authorId).length;
  return count;
};
