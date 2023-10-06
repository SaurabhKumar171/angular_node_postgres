const express = require('express');
const router = express.Router();
 
const {getAllProducts} = require("../controllers/product.controller.js")
const {createProduct} = require("../controllers/createProduct.controllers.js")
const {removeProduct} = require("../controllers/delete.controller.js")
const {updateProduct} = require("../controllers/updateProduct.controller.js")
// Define a route to get all users
router.get('/products', async (req, res) => {
    try {
      const products = await getAllProducts('products');
      res.status(200).
      json({
        message:"Successfully fetched data",
        products:products
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching products' });
    }
  });

router.post("/addProduct",async (req,res)=>{
  try {
    console.log(req.body);
    const { productname, quantity, price } = req.body; // Destructure as needed
    const productData = { productname, quantity, price };
    const newProduct = await createProduct(productData);
    res.status(200).
    json({
      message:"Product added successfuly",
      products:newProduct
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while creating a productj' });
  }
})

router.delete("/delete/:id",removeProduct);

router.put("/update/:productid",updateProduct);
  

module.exports = router;
 