import jwt from "jsonwebtoken"

export const generateToken = (user, secretKey, expiresIn)=>{
    return jwt.sign({data:user}, secretKey, {expiresIn});
}

// jwt.verify(token, secretKey, (err, data) => {
//     res.send( err ? "Token inválido" : data );
//     });
//version mejorada 
export const verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) =>{
            if(err){
                reject (err);
            } else {
                resolve(decoded)
            }
        })
    })
}

