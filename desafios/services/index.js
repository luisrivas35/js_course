import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'
import { services } from './data/services.data.js'

const app = express()

// ruta absoluta
const __dirname = import.meta.dirname

// middleware archivos estáticos
app.use(express.static('public'))
app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render('')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services', { services });
})

app.get("/services/:path", (req, res) => {
  try {
    const path = req.params.path;
    
    const service = services.find(
      (service) => service.url === `/services/${path}`
    );
    
    if (!service) {
      return res.render("error-page", { title: "Service Not Found" });
    }
   
    return res.render('des-service', { service });

  } catch (error) {
   
    return res.render("error-page", { title: "Some error come out !!!" });
  }
});


app.get('*', (req, res) => {
    res.status(404).render("error-page", { title: "Page Not Found" });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})