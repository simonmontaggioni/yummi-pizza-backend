const fs = require("fs");
const ProductModel = require("../models/Product");
const Product = new ProductModel();

exports.createProduct = (req, res, next) => {
  req.body.product = JSON.parse(req.body.product);
  const url = `${req.protocol}://${req.get("host")}`;
  const product = new ProductModel({
    name: req.body.name,
    ingredients: req.body.ingredients,
    imageUrl: `${url}/images/${req.file.filename}`,
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
  if (req.file) {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        const filename = product.imageUrl.split("/images")[1];
        fs.unlink(`images/${filename}`, () => {
          console.log(`file ${filename} deleted successfully`);
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ error: error });
      });
    const url = `${req.protocol}://${req.get("host")}`;
    req.body.product = JSON.parse(req.body.product);

    product = {
      name: req.body.product.name,
      ingredients: req.body.product.ingredients,
      imageUrl: `${url}/images/${req.file.filename}`,
      price: req.body.product.price,
    };
  } else {
    product = {
      name: req.body.name,
      ingredients: req.body.ingredients,
      imageUrl: `${url}/images/${req.file.filename}`,
      price: req.body.price,
    };
  }

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
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      const filename = product.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Product.deleteOne({ _id: req.params.id }).then(() => {
          res.status(200).json({ message: "Product deleted successfully" });
        });
      });
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
