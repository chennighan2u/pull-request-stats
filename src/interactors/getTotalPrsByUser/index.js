module.exports = (pulls, authorId) => {
  /*
   TODO: the counts are not adding up to what was correct before.
   Table is implemented with the addition of PR Count but numbers are wrong
   */
  const count = pulls.filter((pull) => pull.author.id === authorId).length;
  return count;
};
