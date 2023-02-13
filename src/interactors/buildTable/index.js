const table = require('markdown-table');
const calculateBests = require('./calculateBests');
const getTableData = require('./getTableData');
const toTableArray = require('./toTableArray');

module.exports = ({
  reviewers,
  totalPRsByUser,
  disableLinks,
  displayCharts,
  pulls,
}) => {
  const execute = () => {
    const allStats = reviewers.map((r) => r.stats);
    const bests = calculateBests(allStats);

    const tableData = getTableData({
      bests,
      reviewers,
      totalPRsByUser,
      disableLinks,
      displayCharts,
      pulls,
    });

    return table(toTableArray(tableData));
  };

  return execute();
};
