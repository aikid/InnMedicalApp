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

export const setFormFieldsData = async() =>{
    let formData = {
        dataConsultorios:[],
        dataTipodeprocesso:[],
        dataPortecirurgico:[],
        dataTipodecirurgia:[],
        dataCid10:[],
        dataGruposcirurgico:[],
        dataMaterialopme:[],
        dataMaterialpermanente:[],
        dataEmpresamaterial:[],
        dataTipoanestesia:[],
        dataCirurgia:[],
    };
    const connection = await getConnection();
    const consultorios = await connection.getRepository("Consultorio").find();
    if(consultorios.length > 0) consultorios.map((consultorio)=>{formData.dataConsultorios.push({value: consultorio.id, label: consultorio.nome})});

    const tipodeprocessos = await connection.getRepository("Tipodeprocesso").find();
    if(tipodeprocessos.length > 0) tipodeprocessos.map((tipodeprocesso)=>{formData.dataTipodeprocesso.push({value: tipodeprocesso.id, label: tipodeprocesso.nome})});

    const portecirurgicos = await connection.getRepository("Portecirurgico").find();
    if(portecirurgicos.length > 0) portecirurgicos.map((portecirurgico)=>{formData.dataPortecirurgico.push({value: portecirurgico.id, label: portecirurgico.nome})});

    const tipodecirurgias = await connection.getRepository("Tipodecirurgia").find();
    if(tipodecirurgias.length > 0) tipodecirurgias.map((tipodecirurgia)=>{formData.dataTipodecirurgia.push({value: tipodecirurgia.id, label: tipodecirurgia.nome})});

    const cid10s = await connection.getRepository("Cid10").find();
    if(cid10s.length > 0) cid10s.map((cid10)=>{formData.dataCid10.push({value: cid10.id, label: cid10.nome})});

    const gruposcirurgicos = await connection.getRepository("Gruposcirurgico").find();
    if(gruposcirurgicos.length > 0) gruposcirurgicos.map((gruposcirurgico)=>{formData.dataGruposcirurgico.push({value: gruposcirurgico.id, label: gruposcirurgico.nome})});

    const materialopmes = await connection.getRepository("MaterialOPME").find();
    if(materialopmes.length > 0) materialopmes.map((materialopme)=>{formData.dataMaterialopme.push({value: materialopme.id, label: materialopme.nome})});

    const materialpermanentes = await connection.getRepository("MaterialPermanente").find();
    if(materialpermanentes.length > 0) materialpermanentes.map((materialpermanente)=>{formData.dataMaterialpermanente.push({value: materialpermanente.id, label: materialpermanente.nome})});

    const empresamateriais = await connection.getRepository("Empresamaterial").find();
    if(empresamateriais.length > 0) empresamateriais.map((empresamaterial)=>{formData.dataEmpresamaterial.push({value: empresamaterial.id, label: empresamaterial.nome})});

    const tipoanestesias = await connection.getRepository("Tipoanestesia").find();
    if(tipoanestesias.length > 0) tipoanestesias.map((tipoanestesia)=>{formData.dataTipoanestesia.push({value: tipoanestesia.id, label: tipoanestesia.nome})});

    const cirurgias = await connection.getRepository("Cirurgia").find();
    if(cirurgias.length > 0) cirurgias.map((cirurgia)=>{formData.dataCirurgia.push({value: cirurgia.id, label: cirurgia.nome})});
    
    return formData;
}

