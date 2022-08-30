export function authentication(req, res, next) {
  const token = req.headers.authorization;

  console.log(token.slice(7));

  next();
}
