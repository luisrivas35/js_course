
import express from 'express' // module ES6 type module

const app = express()
const port = 3000
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/hola', (req, res) =>{
    res.json({ msg: "Hello from nodejs" });
})

app.get("/chao", (req, res) => {
  res.json({ msg: "Bye from nodejs" });
});

app.listen(port, () =>{
    console.log('Example app listening on port 3000')
})
