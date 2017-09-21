/**
 * Generic error handler, returns 404 in all cases
 */
function errorHandler(err, req, res, next) {
  res.status(404)
    .json({
      error: {
        msg: err.message,
        stack: err.stack
      }
    });
}

module.exports = errorHandler;