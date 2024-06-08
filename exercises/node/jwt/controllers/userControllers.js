import users from "../data/users.js";
import { generateToken, verifyToken } from "../utils/jwtUtils.js";
import "dotenv/config";


const secretKey = process.env.SECRET_KEY

export const getToken = (req, res) => {
    const token = generateToken(users[1], secretKey, "1h")
    res.send(token)
}

export const verifyUserToken = async (req, res) => {
    const { token } = req.query;
    try{
        const data = await verifyToken(token, secretKey)
        res.send(data)
    }catch (err) {
        res.send("Token invalido")
    }
}

export const login = (req, res) => {

    const { email, password } = req.body; // o mañana o cuando toque encriptamos contraseña y hacemos segura esta query
    const user = users.find((u)=> u.email === email && u.password === password);

    if (user) {
        const token = generateToken(users[1], secretKey, "2m");
        res.send(`
        <a href="/dashboard?token=${token}"> <p> Ir al Dashboard </p> </a>
        Bienvenido, ${email}.
        <script>
        localStorage.setItem('token', JSON.stringify("${token}"))
        </script>
        `);
        } else {
        res.send("Usuario o contraseña incorrecta");
        }    
}