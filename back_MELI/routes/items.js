const { Router } = require("express");
const { searchItems, searchItemsById } = require("../controllers/items");
const router = Router();

router.get("/", searchItems);
router.get("/:id", searchItemsById);

module.exports = router;
