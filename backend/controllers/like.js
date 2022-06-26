require("dotenv").config;
const UrlParser = require("url-parse");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { addLike, getLike, removeLike } = require("../models/like");
const { millify } = require("millify");

exports.addLike = async (req, res) => {
  let origin;

  if (req.headers["Pass-Origin"]) {
    origin = "https://page-like-test.dev";
  } else {
    origin = req.get("origin");
  }
  var _url = new UrlParser(origin);

  if (!_url.host) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      code: "BAD_REQUEST",
      message: ReasonPhrases.BAD_REQUEST,
    });
  }

  const transaction = await addLike(_url.host);

  if (!transaction) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }

  return res.status(StatusCodes.ACCEPTED).send({
    success: true,
    message: ReasonPhrases.ACCEPTED,
    totalLike: millify(transaction.likeCount),
  });
};

exports.getLike = async (req, res) => {
  let origin;

  if (req.headers && req.headers["Pass-Origin"]) {
    origin = "https://page-like-test.dev";
  } else {
    origin = req.get("origin");
  }
  var _url = new UrlParser(origin);

  if (!_url.host) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      code: "BAD_REQUEST",
      message: ReasonPhrases.BAD_REQUEST,
    });
  }

  const transaction = await getLike(_url.host);

  if (!transaction) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }

  return res.status(StatusCodes.OK).send({
    success: true,
    message: ReasonPhrases.OK,
    totalLike: millify(transaction.likeCount),
  });
};

exports.removeLike = async (req, res) => {
  let origin;

  if (req.headers["Pass-Origin"]) {
    origin = "https://page-like-test.dev";
  } else {
    origin = req.get("origin");
  }
  var _url = new UrlParser(origin);

  if (!_url.host) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      code: "BAD_REQUEST",
      message: ReasonPhrases.BAD_REQUEST,
    });
  }

  const [success, transaction] = await removeLike(_url.host);

  if (!transaction) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }

  return res
    .status(success ? StatusCodes.ACCEPTED : StatusCodes.CONFLICT)
    .send({
      success: success,
      message: success ? ReasonPhrases.ACCEPTED : ReasonPhrases.CONFLICT,
      totalLike: millify(transaction.likeCount),
    });
};
