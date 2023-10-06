const pool = require("../config/database")

const viewProduct = async (tableName) => {
    try {
        const query = `SELECT * FROM ${tableName}`;
        const { rows } = await pool.query(query);
        return rows;
      } catch (error) {
        console.error('Error retrieving data from the database:', error);
        throw error;
      }
}


async function getAllProducts() {
    try {
      const users = await viewProduct('products');
      return users;
    } catch (error) {
      console.log("Could not fetch data from DB");
    }
  }

module.exports={ getAllProducts };