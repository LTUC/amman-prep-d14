module.exports = (err, req, res, next) => {
  res.status(500).send({
    message: "Internal Server Error",
    code: 500,
    error : err
  })
};