const jwt = require("jsonwebtoken");

// This function checks if the user logged in,and verfiy token if valid to used it(info inside it) in next function
const authentication = (req, res, next) => {
 
 let token=req.headers.authorization
 if(!token)
 {
  return res.status(404).json({message:'forbidden'})
 }
 else{
  token=req.headers.authorization.split(" ").pop();

  const secert =process.env.SECRET;
  jwt.verify(token,secert,(err,result)=>

  {
    if(err)
    {
      return res.status(500).json({message:'token is invalid'})
    }
    else{
      req.token=result;
      next()
    }
  })
 }

};

module.exports = authentication;