const pool = require("../config/database")


const removeProduct =async (req,res) =>{
      try{
         const {id}=req.params;
         
         const query =`Delete from products where productid=${id}`;
         await pool.query(query);

         const query2 = `SELECT * FROM products`;
         const { rows } = await pool.query(query2);

         res.status(200).json({
            message:"product deleted successfully",
            products: rows
         })
      }
      catch(error){
        console.error('Error deleting product:', error);
        throw error;
      }
}

module.exports= {removeProduct};