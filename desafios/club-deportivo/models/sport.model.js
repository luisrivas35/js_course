import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { nanoid } from 'nanoid';


const _dirname = import.meta.dirname
const filePath = path.join(_dirname, "../data/sports.json")

const add = async (name, price) => {
    const sports = await findAll();
    const sport = {
        name, 
        price,
        id: nanoid()
    }
    sports.push(sport);
    await writeFile(filePath, JSON.stringify(sports));
    return sport;
};

const findAll = async () => {
    const data = await readFile(filePath, "utf8")
    const sports = JSON.parse(data)
    return sports;
};

const findById = async (id) => {
    const sports = await findAll();
    const sport = sports.find(item => item.id === id)
    return sport

};

const update = async (id, name, price) => {
    const sports = await findAll();
    const sport = sports.find((item) => item.id === id);
    sport.name = name;
    sport.price = price;
    await writeFile(filePath, JSON.stringify(sports));
    return sport;
};
    

const remove = async(id) => {
    const sports = await findAll();
    const filteredSports = sports.filter((item) => item.id !== id);
    await writeFile(filePath, JSON.stringify(filteredSports));
    return filteredSports;
};



export const Sport = {
    add, 
    findAll,
    findById,
    update,
    remove

}