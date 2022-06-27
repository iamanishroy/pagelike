const router = require("express").Router();
const { addLike, getLike, removeLike } = require("../controllers/like");
const parseOrigin = require("../middleware/parseOrigin");
const validateAgent = require("./../middleware/validateAgent");
router.post("/", validateAgent, parseOrigin, addLike);

router.get("/", validateAgent, parseOrigin, getLike);

router.delete("/", validateAgent, parseOrigin, removeLike);

module.exports = router;
