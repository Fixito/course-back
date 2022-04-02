const notFound = (req, res) =>
  res.status(404).send('<h1>La page que vous cherchez est inexsitante</h1>');

module.exports = notFound;
