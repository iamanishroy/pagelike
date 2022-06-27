const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UrlParser = require("url-parse");

const parseOrigin = function (req, res, next) {
  let origin;

  if (req.headers && req.headers["Pass-Origin"]) {
    origin = "https://page-like-test.dev";
  } else {
    origin = req.get("origin");
  }

  let { pathname, host } = new UrlParser(origin);

  if (!host || !pathname) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      code: "BAD_REQUEST",
      message: ReasonPhrases.BAD_REQUEST,
    });
  }

  if (pathname.charAt(pathname.length - 1) === "/") {
    pathname = pathname.slice(0, -1);
  }

  req.headers["Origin-Path"] = host + pathname;
  req.headers["Origin-Host"] = host;
  next();
};

module.exports = parseOrigin;
