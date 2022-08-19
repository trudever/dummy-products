const axios = require('axios')

exports.getProducts = async (req, res) => {
  const category = req.query.category;
  const page = parseInt(req.query.page);
  const response = await axios.get(`https://dummyjson.com/products${category === undefined ? '' : category === 'All' ? '?limit=100' : '/category/' + category + '?limit=100'}`);
  const products = response.data.products.slice((page - 1) * 10, page * 10);
  res.status(200).send({ products, total: response.data.total });
};

exports.getCategories = async (req, res) => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  res.status(200).send(response.data);
};
