const router = require('express').Router();
const Review = require('../models/review.js');
const Product = require('../models/products');
const upload = require('../middlewares/upload-photo');
const verifyToken = require('../middlewares/verify-token');

router.post(
  '/reviews',
  [upload.single('photo'), verifyToken],
  async (req, res) => {
    try {
      let review = new Review();

      review.title = req.body.title;
      review.description = req.body.description;
      review.rating = req.body.rating;
      if (!req.file) {
        review.photo = '';
      } else {
        review.photo = req.file.location;
      }
      //review.photo = req.file.location;
      review.writer = req.decoded._id;
      review.productID = req.body.productID;
      await Product.findOneAndUpdate(
        { _id: req.body.productID },
        { $push: { reviews: review._id } },
      );
      let savedReview = await review.save();

      if (savedReview) {
        res.json({
          success: true,
          message: 'Successfully uploaded',
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
);

router.delete('/reviews/:id', async (req, res) => {
  try {
    let deleteReview = await Review.findOneAndDelete({ _id: req.params.id });
    console.log(req.query.productID);
    await Product.update(
      { _id: req.query.productID },
      { $pull: { reviews: req.params.id } },
    );
    if (deleteReview) {
      res.json({
        success: true,
        message: 'Successfully deleted',
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
