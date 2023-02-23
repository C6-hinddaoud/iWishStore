const { Pool } = require("pg");
const connectionString = process.env.DB_URL;
const pool = new Pool({
  connectionString,
});

module.exports = pool;

// this function will create new Table in the database
const createTable = () => {

  pool
  .query(
    `
    CREATE TABLE orders(
      id SERIAL NOT NULL,
     
      user_id INT,
      item_id INT,
      amount FLOAT,
      price FLOAT,
      
      TOTAL FLOAT,
      is_deleted SMALLINT DEFAULT 0,
       
        
        
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (item_id) REFERENCES items(id),
      PRIMARY KEY (id)
    );
    
     `
  
  )  
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log(err);
  });
};
  
  //  createTable()
