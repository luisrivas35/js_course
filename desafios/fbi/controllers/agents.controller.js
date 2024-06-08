import jwt from "jsonwebtoken";
import agents from "../data/agentes.js";

const authenticateAgent = (req, res) => {
  const { email, password } = req.body;

  const agent = agents.find(
    (agent) => agent.email === email && agent.password === password
  );
  if (!agent) {
    return res.status(401).send("Credenciales No Autorizadas");
  }

  const token = jwt.sign({ email: agent.email }, process.env.JWT_SECRET, {
    expiresIn: "2m",
  });

  res.send(`
    <html>
      <body>
        <h1>Autenticado</h1>
        <p>Email: ${agent.email}</p>
        <a href="/restricted" id="restrictedLink">Ir a la página restringida y ultra secreta</a>
        <script>
          sessionStorage.setItem('token', '${token}');
          document.getElementById('restrictedLink').addEventListener('click', function(event) {
            event.preventDefault();
            fetch('/restricted', {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
              }
            })
            .then(response => response.text())
            .then(data => {
              document.body.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
          });
        </script>
      </body>
    </html>
  `);
};

const restrictedPage = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("No esta Autorizado: No se proporcionó un token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.send(`<h1>Bienvenido ${decoded.email}</h1>`);
  } catch (error) {
    res.status(401).send("No Autorizado: Token inválido o expirado");
  }
};

export { authenticateAgent, restrictedPage };
