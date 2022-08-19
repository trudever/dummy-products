const Router = require('express').Router;
const router = new Router();

const { controller } = require('../controllers');

router.get('/products', controller.getProducts);

router.get('/categories', controller.getCategories);

module.exports = router;
