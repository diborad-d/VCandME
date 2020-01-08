const router = require("express").Router();
const itemRoutes = require("./items");

console.log("It got to this stage")

// Book routes
router.use("/items", itemRoutes);

module.exports = router;