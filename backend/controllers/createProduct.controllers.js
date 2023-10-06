const pool = require("../config/database")
 

const createProduct = async (productData) => {
 
    try{
        const {productname , quantity, price} = productData;
        const query = `
        INSERT INTO products (productname, quantity, price)
        VALUES ($1, $2, $3)
        RETURNING *`;
  
        const values = [productname, quantity, price];
    
        const { rows } = await pool.query(query, values);
    
        // Return the newly created product
        return rows[0];
    }
    catch (error) {
        console.error('Error creating product:', error);
        throw error;
      }

}

module.exports = { createProduct }