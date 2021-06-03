const express = require("express");

const router = express.Router();

const ProductController = require("../controllers/ProductController");
const multerMiddleware = require("../middlewares/multer-config");

router.get("/", ProductController.getAllProducts);
router.post("/", multerMiddleware, ProductController.createProduct);
router.get("/:id", ProductController.getOneProductById);
router.put("/:id", multerMiddleware, ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
