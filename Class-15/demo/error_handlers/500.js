module.exports = (err, req, res, next) => {
  res.status(500).send({
    code: 500,
    message: "Internal Server Error",
    Error: err,
  });
};
