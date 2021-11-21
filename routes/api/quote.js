const router = require("express").Router();
const getAllQutes = require("../../controllers/quote");

router.get("/", async (req, res, next) => {
  try {
    getAllQutes()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
