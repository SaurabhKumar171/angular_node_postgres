const pool = require("../config/database")

const updateProduct = async (req,res) => {
    try{
        const {productid}=req.params;
        const { productname, quantity, price } = req.body;
        
        const query = `
        UPDATE products
        SET productname = $1, quantity = $2, price = $3
        WHERE productid = $4
        RETURNING *`;

        const values = [productname, quantity, price, productid];

        const { rows } = await pool.query(query, values);

        if (rows.length === 0) {
            throw new Error('Product not found or not updated.');
          }
      
          res.status(200).json({
            message:"Product updated successfully",
            products:rows
          })
         } 
        catch (error) {
          console.error('Error updating product:', error);
          throw error;
        }
}

module.exports = {updateProduct}