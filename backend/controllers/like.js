require("dotenv").config;
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { addLike, getLike, removeLike } = require("../models/like");
const { millify } = require("millify");

exports.addLike = async (req, res) => {
  let transaction;

  if (req.query.level === "host") {
    transaction = await addLike(req.headers["Origin-Host"]);
  } else {
    transaction = await addLike(req.headers["Origin-Path"]);
  }

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
  let transaction;

  if (req.query.level === "host") {
    transaction = await getLike(req.headers["Origin-Host"]);
  } else {
    transaction = await getLike(req.headers["Origin-Path"]);
  }

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

  if (req.query.level === "host") {
    origin = req.headers["Origin-Host"];
  } else {
    origin = req.headers["Origin-Path"];
  }

  const [success, transaction] = await removeLike(origin);

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
