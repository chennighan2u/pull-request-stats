const SORT_KEY = {
  TIME: 'timeToReview',
  REVIEWS: 'totalReviews',
  COMMENTS: 'totalComments',
  PRS: 'totalPRs',
};

const COLUMNS_ORDER = ['totalReviews', 'timeToReview', 'totalComments', 'totalPrs'];

const STATS_OPTIMIZATION = {
  totalReviews: 'MAX',
  totalComments: 'MAX',
  commentsPerReview: 'MAX',
  timeToReview: 'MIN',
  totalPrs: 'MAX',
};

const STATS = Object.keys(STATS_OPTIMIZATION);

module.exports = {
  SORT_KEY,
  COLUMNS_ORDER,
  STATS,
  STATS_OPTIMIZATION,
};
