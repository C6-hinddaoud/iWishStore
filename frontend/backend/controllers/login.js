//------------step1 : use the packages------------
//1. (pool) require the connection so it can be used ,we are destructing the pool out of the exported object
//2. (bcrypt) help you hash passwords
//3. (jwt) it used to encrypted , also provide secrecy between parties
const pool = require("../model/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//------------step2 : excute the func.------------
const login = (req, res) => {
  const { email, password } = req.body;
  const value = [email.toLowerCase()];
  //select rows with all columns from the table `users` that has the email set to the value
  const query = `SELECT * FROM users
                 WHERE email=$1 `;
  console.log("values", value, "query", query);
  pool
    .query(query, value)
    .then(async (result) => {
      console.log(result);
      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: `The email doesn't exist`,
        });
      }
      try {
        const validPassword = await bcrypt.compare(
          password,
          result.rows[0].password
        );
        console.log("password= ", password);
        console.log("result.rows= .password", result.rows[0].password);
        console.log("validPassword= ", validPassword);
        if (!validPassword) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        //----------payload----------
        const payload = {
          userId: result.rows[0].id,
          
          lastName:result.rows[0].lastname,
          firstName:result.rows[0].firstname,
        };
        console.log("payload= ", payload);
        //----------options----------
        const options = {
          expiresIn: "1d",
        };
        console.log("options= ", options);
        //----------secret----------

        const secret = process.env.SECRET;
        console.log("secret=", secret);

        //----------token----------
        const token = await jwt.sign(payload, secret, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
          userId: result.rows[0].id,

          role:result.rows[0].role_id,

          firstName:result.rows[0].firstname,

        });
        console.log("token= ", token);
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = {
  login,
};