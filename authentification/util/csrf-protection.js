
const { doubleCsrf } = require("csrf-csrf");
const {
  invalidCsrfTokenError, // This is just for convenience if you plan on making your own middleware.
  generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
  validateRequest, // Also a convenience if you plan on making your own middleware.
  doubleCsrfProtection, // This is the default CSRF protection middleware.
} = doubleCsrf(doubleCsrfOptions);

exports.addCsrfProtection = (req, res) => {
  // To protect all routes POST, PUT, DELETE, 
  express.get("/csrf-token", (req, res) => {
    const csrfToken = generateToken(req, res);
    // You could also pass the token into the context of a HTML response.
    res.json({ csrfToken });
  });
  express.use(doubleCsrfProtection);
}
