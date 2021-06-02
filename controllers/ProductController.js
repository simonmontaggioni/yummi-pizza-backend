const ProductModel = require("../models/Product");
const Product = new ProductModel();

exports.createProduct = (req, res, next) => {
  const product = new ProductModel({
    name: req.body.name,
    ingredients: req.body.ingredients,
    image: req.body.image,
    price: req.body.price,
    id: req.body.id,
  });

  product
    .save()
    .then(() => {
      res.status(201).json({
        message: "Product saved successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneProductById = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.updateProduct = (req, res, next) => {
  const product = new ProductModel({
    _id: req.params.id,
    name: req.body.name,
    ingredients: req.body.ingredients,
    image: req.body.image,
    price: req.body.price,
  });

  Product.updateOne({ _id: req.params.id }, product)
    .then(() => {
      res.status(201).json({
        message: "Product updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Product deleted successfully" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};
