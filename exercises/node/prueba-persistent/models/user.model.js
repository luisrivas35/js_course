import { readFile, writeFile } from 'fs/promises'
import { nanoid } from 'nanoid'
import path from 'path'

const _dirname = import.meta.dirname

const filePath = path.join(_dirname, "../data/users.json")

const findAll = async () => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    return users
}

const findOneById = async (uid) => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    const user = users.find(item => item.uid === uid)
    return user
}

const create = async (name, email) => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    const newUser = {
        name,
        email,
        uid: nanoid()
    }
    users.push(newUser)
    await writeFile(filePath, JSON.stringify(users))
    return newUser
}

const update = async (uid, name, email) => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    const user = users.find(item => item.uid === uid)
    user.name = name
    user.email = email
    await writeFile(filePath, JSON.stringify(users))
    return user
}

const remove = async (uid) => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    const filteredUsers = users.filter(item => item.uid !== uid)
    await writeFile(filePath, JSON.stringify(filteredUsers))
    return filteredUsers
}

export const User = {
    findAll,
    findOneById,
    create,
    update,
    remove
}