const router = require("express").Router();
const { addLike, getLike, removeLike } = require("../controllers/like");
const validateAgent = require('./../middleware/validateAgent')
router.post(
    "/",
    validateAgent,
    addLike
);

router.get(
    "/",
    validateAgent,
    getLike
);

router.delete(
    "/",
    validateAgent,
    removeLike
);

module.exports = router;