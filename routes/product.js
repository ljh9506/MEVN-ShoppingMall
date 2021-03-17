const router = require('express').Router();
const Products = require('../models/products.js');
const upload = require('../middlewares/upload-photo');
const verifyToken = require('../middlewares/verify-token');

router.post(
  '/products',
  [upload.single('photo'), verifyToken],
  async (req, res) => {
    try {
      let product = new Products();
      product.title = req.body.title;
      product.category = req.body.category;
      product.description = req.body.description;
      product.price = req.body.price;
      product.photo = req.file.location;
      product.stockQuantity = req.body.stockQuantity;
      product.uploader = req.decoded._id;

      console.log(req.decoded);

      await product.save();
      res.json({
        success: true,
        message: 'Successfully uploaded',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
);

router.get('/products', async (req, res) => {
  const page = req.query.page ? req.query.page : 1;

  let products = await Products.find()
    .populate('reviews')
    .skip((page - 1) * 2)
    .limit(2)
    .exec();

  res.json({
    success: true,
    products: products,
  });
});

router.get('/allproducts', async (req, res) => {
  let products = await Products.find().populate('reviews').exec();

  res.json({
    success: true,
    products: products,
  });
});

router.get('/products/:id', async (req, res) => {
  try {
    let product = await Products.findOne({ _id: req.params.id })
      .deepPopulate('reviews.writer')
      .exec();

    if (product) {
      res.json({
        success: true,
        product: product,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
