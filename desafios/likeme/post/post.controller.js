import { PostModel } from "./post.model.js"

// posts
const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.findAll()
        return res.json(posts)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// posts
const createPost = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body
        const post = await PostModel.create({ usuario, url, descripcion })
        return res.status(201).json(post)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// posts/:id
const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.update(id)
        return res.json(post)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const PostController = {
    getPosts, createPost, updatePost
}