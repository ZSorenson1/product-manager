const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api' , ProductController.index);
    app.get('/api/products', ProductController.allProducts);
    app.get('/api/products/:id', ProductController.findProduct);
    app.put('/api/products/:id/edit', ProductController.editProduct);
    app.delete('/api/products/:id/delete', ProductController.deleteProduct);
    app.post('/api/products/new', ProductController.createProduct);
}