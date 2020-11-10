const { request, response } = require('express');
const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.allProducts = (request, response) => {
    Product.find({})
    .then(allProds => response.json(allProds))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.findProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
    .then(prod => response.json(prod))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
    .then(product => response.json(product))
    .catch(err => response.json(err));
}

module.exports.editProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(prod => response.json(prod))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}