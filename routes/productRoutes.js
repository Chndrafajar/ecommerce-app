import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

//routes
router.post('/create-product', requireSignIn, formidable(), isAdmin, createProductController);

//routes
router.put('/update-product/:pid', requireSignIn, formidable(), isAdmin, updateProductController);

//get routes
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController);

//get photo
router.get('/product-photo/:pid', productPhotoController);

//delete product

router.delete('/delete-product/:pid', deleteProductController);

//filter product
router.post('/product-filter', productFilterController);

//product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

//search product
router.get('/search/:keyword', searchProductController);

//similiar product
router.get('/related-product/:pid/:cid', relatedProductController);

//category wised product
router.get('/product-category/:slug', productCategoryController);

//payment routes
//token
router.get('/braintree/token', braintreeTokenController);

//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController);
export default router;
