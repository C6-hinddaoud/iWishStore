//------------step1 : get the packages------------
const pool = require("../model/db");
const bcrypt = require("bcrypt");
//const saltRounds = parseInt(process.env.SALT);
//------------step2 : excute the func.------------
const register = async (req, res) => {
  const { firstName, lastName, email, password  } = req.body; //declaring the
//this proccess will encryption the password 
 //// const salt = "5";
  const encrypt = await bcrypt.hash(password, 5);
  console.log("encrypt= ", encrypt);
//values
  const values = [firstName, lastName, email.toLowerCase() , encrypt];
  console.log("values= ", values);

//query
//inserts (creates) a new row in the table `users` with the specified values
//Create `users` table with the following columns: firstName, lastName, age, city, email, password, role_id with its data types.
  const query = `INSERT INTO users 
                 (firstName, lastName,  email, password )
                 VALUES ($1,$2,$3,$4) RETURNING *`;
  console.log("query= ", query);
  pool
    .query(query, values)
    .then((result) => {
      console.log("result",result);
      res.status(200).json({
        success: true,
        messsge: "Account Created Successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        massage: "The email already exists",
        err:err.messsge,
      });
    });
};

module.exports = {
  register,
};

