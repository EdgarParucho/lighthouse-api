function bodyStateValidator({ required }) {
  return (req, res, next) => {
    if (!req.body || typeof req.body !== 'object') return res.sendStatus(400);
    else if (JSON.stringify(req.body).includes("<script>")) return res.sendStatus(400);
    else if (required && Object.values(req.body).length == 0) return res.sendStatus(400);
    next();
  };
}

module.exports = bodyStateValidator;