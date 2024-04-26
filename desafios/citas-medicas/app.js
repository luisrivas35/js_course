;

import _ from "lodash";
import chalk from "chalk";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import axios from "axios";
import path from "path";

const app = express();

// ruta absoluta
const __dirname = import.meta.dirname;

// activar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware archivos estáticos
app.use(express.static("public"));
app.use(
  "/assets/css",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);
app.use(
  "/assets/js",
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");
// Array para almacenar los usuarios registrados
const users = [];

// Middleware para imprimir por la consola la lista de usuarios con Chalk
app.use((req, res, next) => {
  console.log(chalk.bgWhite.blue("Usuarios Registrados:"));
  users.forEach((user) => {
    console.log(chalk.blue(JSON.stringify(user)));
  });
  next();
});

// Función para obtener datos de la API Random User y registrar un nuevo usuario
async function registrarUsuario() {
  try {
    // Obtener datos de la API Random User
    const { data } = await axios.get("https://randomuser.me/api/");

    // Crear el objeto de usuario con datos de la API y otros campos requeridos
    const newUser = {
      id: uuidv4(), // Generar un ID único
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      gender: data.results[0].gender,
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"), // Obtener la fecha y hora actual
    };

    // Agregar el nuevo usuario al array de usuarios
    users.push(newUser);

    // Devolver el nuevo usuario
    return newUser;
  } catch (error) {
    console.error(
      chalk.red("Error al obtener datos de la API Random User:", error)
    );
    throw new Error("Error al obtener datos de la API Random User");
  }
}

// Ruta para registrar un nuevo usuario y mostrar la lista de usuarios actualizada
app.get("/", async (req, res) => {
  try {
    // Registrar un nuevo usuario
    const newUser = await registrarUsuario();

    // Renderizar la vista con la lista actualizada de usuarios
    res.render("users", { users });
  } catch (error) {
    // Renderizar la vista de error en caso de fallo
    res.render("error", { error: error.message });
  }
});

// Ruta para consultar todos los usuarios registrados
app.get("/usuarios", (req, res) => {
  // Dividir el array de usuarios por sexo usando Lodash
  const groupedUsers = _.groupBy(users, "gender");

  // Imprimir por consola la lista de usuarios con Chalk
  console.log(chalk.bgWhite.blue("Usuarios Registrados:"));
  console.log(chalk.blue(JSON.stringify(groupedUsers)));

  // Enviar la lista de usuarios al cliente
  res.json(groupedUsers);
});

// Iniciar el servidor con Nodemon
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
