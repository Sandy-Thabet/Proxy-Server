const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.response ? err.response.status : 500).json({
    error: err.message,
  });
};

module.exports = errorHandler;
