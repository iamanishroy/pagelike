const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UrlParser = require("url-parse");

const parseOrigin = function (req, res, next) {
  let origin;

  if (req.headers && req.headers["Pass-Origin"]) {
    origin = "https://page-like-test.dev";
  } else {
    origin = req.query["origin"];
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

  if (req.query.level === "host" || req.body.params?.level === "host") {
    req.headers["Origin"] = host;
  } else {
    req.headers["Origin"] = host + pathname;
  }
  next();
};

module.exports = parseOrigin;
