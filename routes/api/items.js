const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/items"
router.route("/")
//   .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/items/:id"
// router
//   .route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

module.exports = router;
