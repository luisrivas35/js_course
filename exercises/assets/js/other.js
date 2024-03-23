const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
            //throw new Error
            throw {
                error: true,
                msg: "Error en peticion",
                code: response.status
            }
        }

        const data = await response.json()
        console.log(data.title)

    } catch (error) {
        console.log(error)

    }
}

getPosts()