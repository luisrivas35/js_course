import { User } from "../models/user.model.js"

export const getAllUsers = async (req, res) => {
    // console.log(req.query)
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const getUser = async (req, res) => {
    const { uid } = req.params
    const user = await User.findOneById(uid)
    return res.json(user)
}

export const createUser = async (req, res) => {
    const { name, email } = req.body
    const newUser = await User.create(name, email)
    return res.json(newUser)
}

export const updateUser = async (req, res) => {
    const { uid } = req.params
    const { name, email } = req.body
    const user = await User.update(uid, name, email)
    return res.json(user)
}

export const removeUser = async (req, res) => {
    const { uid } = req.params
    const filteredUsers = await User.remove(uid)
    return res.json(filteredUsers)
}