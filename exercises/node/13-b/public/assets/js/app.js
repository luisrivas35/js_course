
$(document).ready(() => {

    const formulario = $('#formulario')
    const asunto = $('#asunto')
    const correo = $('#correo')
    const descripcion = $('#descripcion')

    formulario.on('submit', async (evento) => {
        evento.preventDefault()
        try {
            // peticiones http: fetch, $.ajax(), axios
            const { data } = await axios.put("/enviar", {
                asunto: asunto.val(),
                correo: correo.val(),
                descripcion: descripcion.val(),
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    })
})