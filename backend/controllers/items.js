//------------step1 : use the packages------------
// require the connection so it can be used
// we are destructing the pool out of the exported object
const pool = require("../model/db");

//------------step2 : excute the func.------------
//     createNewCategory + createNewCategory

//------------- createNewItem -------------
const createNewItem = (req, res) => {
  //donations_Category:clothes , food, money, furniture
  const { name, salary,image } = req.body;
  const values = [title, imgePath];
  //inserts (creates) a new row in the table `donations_Category` with the specified values
  //Create `donations_Category` table with the following columns: title,imgePath with its data types.
  const query = `INSERT INTO items
                (name, salary,image)
                VALUES ($1,$2,$3)  RETURNING *;`;
  console.log("values= ", values, "query= ", query);
  pool
    .query(query, values)
    .then((result) => {
      console.log("result", result);
      res.status(201).json({
        success: true,
        message: "items created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, message: "Server Error", err: err.message });
    });
};
//------------- get All items -------------
const getitems = (req, res) => {  
  //selecting (retrieving) rows with  all columns (*) from the table `items`
  const query = `SELECT *  FROM items ;`;
  console.log("query= ", query);
  pool
    .query(query)
    .then((result) => {
      console.log("result= ", result);
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "no items found",
        });
      }
      res.status(200).json({
        success: true,
        message: "All the Items ",
        result: result.rows,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, message: "Server Error", err: err.message });
    });
};
module.exports = { createNewItem, getitems };
