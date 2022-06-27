require("dotenv").config;
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { addLike, getLike, removeLike } = require("../models/like");
const { millify } = require("millify");

exports.addLike = async (req, res) => {
  const transaction = await addLike(req.headers["Origin"]);

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
  const transaction = await getLike(req.headers["Origin"]);

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
  const [success, transaction] = await removeLike(req.headers["Origin"]);

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
