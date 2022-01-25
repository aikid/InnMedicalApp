import { getConnection } from "typeorm"; // add

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getData = async(repository) =>{
    try {
        const connection = await getConnection();
        const data = await connection.getRepository(repository).find();
        if(data.length > 0) return data;
        else return [];
    } catch (err) {
        console.log(err);
    }
}

export const getFatherData = async() =>{
    try {
        const connection = await getConnection();
        const data = await connection.getRepository("Gruposcirurgico").find();
        if(data.length > 0) return data;
        else return [];
    } catch (err) {
        console.log(err);
    }
}


export const saveData = async(data,repository) =>{
    try{
        const connection = await getConnection();
        await connection.getRepository(repository).save({
            nome: data,
        });
        return true;
    } catch (err) {
        return false;
        console.log(err);
    }
}

export const saveMultData = async(data,repository) =>{
    try{
        const connection = await getConnection();
        await connection.getRepository(repository).save({
            groupId: data.grupocirurgico,
            nome: data.nome,
        });
        return true;
    } catch (err) {
        return false;
        console.log(err);
    }
}

export const deleteData = async(id,repository) =>{
    try{
        const connection = await getConnection();
        await connection.getRepository(repository).delete(id);
        return true;
    } catch (err) {
        return false;
        console.log(err);
    }
}

