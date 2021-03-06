import config from "../database/config"; // add
import { createConnection } from "typeorm"; // add

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const initMigrations = async() =>{
    try {
        const connection = await createConnection(config);

        const consultorios = await connection.getRepository("Consultorio").find();
        if(consultorios.length == 0) await createConsultorios(connection);

        const tipodeprocesso = await connection.getRepository("Tipodeprocesso").find();
        if(tipodeprocesso.length == 0) await createTipodeProcessos(connection);

        const portecirurgico = await connection.getRepository("Portecirurgico").find();
        if(portecirurgico.length == 0) await createPorteCirurgicos(connection);

        const tipodecirurgia = await connection.getRepository("Tipodecirurgia").find();
        if(tipodecirurgia.length == 0) await createTipodeCirurgias(connection);

        const cid10 = await connection.getRepository("Cid10").find();
        if(cid10.length == 0) await createCid10(connection);

        const gruposcirurgico = await connection.getRepository("Gruposcirurgico").find();
        if(gruposcirurgico.length == 0) await createGruposCirurgicos(connection);

        const materialopme = await connection.getRepository("MaterialOPME").find();
        if(materialopme.length == 0) await createMateriaisOPME(connection);

        const materialpermanente = await connection.getRepository("MaterialPermanente").find();
        if(materialpermanente.length == 0) await createMateriaisPermanentes(connection);

        const empresamaterial = await connection.getRepository("Empresamaterial").find();
        if(empresamaterial.length == 0) await createEmpresaMateriais(connection);

        const tipoanestesia = await connection.getRepository("Tipoanestesia").find();
        if(tipoanestesia.length == 0) await createTipoAnestesias(connection);

        const cirurgia = await connection.getRepository("Cirurgia").find();
        if(cirurgia.length == 0) await createCirurgias(connection);

        const triagem = await connection.getRepository("Triagem").find();
        if(triagem.length == 0) await createTriagem(connection);

        return true;
    } catch (err) {
        return true;
        console.log(err); // check (or deal) with connection errors
    }
}

export const createTriagem = async(connection) =>{
    try{
        await connection.getRepository("Triagem").save({
            anestesista: "Da Equipe",
            cid10: "Z30.2",
            cirurgiaPrincipal: "Teste ",
            cirurgias: "URETERORRENOLITOTRIPSIA FLEXIVEL A LASER UNILATERAL",
            consultorio: "IN Itaim",
            cpf: "23095106882",
            diagnostico: "Teste",
            diariasCti: "Teste",
            email: "klonoa51@gmail.com",
            empresaMaterial: "Storm",
            gruposcirurgicos: " , URETEROLITOTRIPSIA R??GIDA LASER",
            materialOpme: "2 Fios Guia Hidrof??licos / 1 Fibra Laser / 1 Basket / 1 Cateter Bal??o de Dilata????o Ureteral / 1 Cateter Duplo Jota",
            materialPermanente: "Ureterosc??pio Semi-R??gido / Cistosc??pio / Radioscopia / Set de V??deo",
            nome: "Teste ",
            oncologica: "Sim",
            porteCirurgico: "Pequeno",
            reservaCti: "Sim",
            telefone1: "11947341276",
            telefone2: "11947341276",
            tipodeCirurgia: "Aberta",
            tipodeProcesso: "100% Reembolso",
            tipagemSanguinea:"A",
            reservaSangue: "Sim",
            tipoQuantidade: "4 Litros",
            orientacoes: "Paciente diab??tico, seguir medidas padr??o de aplica????o de medicamentos",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar triagem: ', err);
        return false;
    }
}

export const createConsultorios = async(connection) =>{
    try{
        await connection.getRepository("Consultorio").save({
            nome: "IN Itaim",
        });
        await connection.getRepository("Consultorio").save({
            nome: "IN Vila Ol??mpia",
        });
        await connection.getRepository("Consultorio").save({
            nome: "CMed Morumbi",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar consultorios: ', err);
        return false;
    }
}


export const createTipodeProcessos = async(connection) =>{
    try{
        await connection.getRepository("Tipodeprocesso").save({
            nome: "100% Reembolso",
        });
        await connection.getRepository("Tipodeprocesso").save({
            nome: "50% / 50% (op????o reembolso)",
        });
        await connection.getRepository("Tipodeprocesso").save({
            nome: "100% Particular",
        });
        await connection.getRepository("Tipodeprocesso").save({
            nome: "100% Conv??nio Credenciado",
        });
        await connection.getRepository("Tipodeprocesso").save({
            nome: "100% Via Hospital",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar tipo de processo: ', err);
        return false;
    }
}

export const createPorteCirurgicos = async(connection) =>{
    try{
        await connection.getRepository("Portecirurgico").save({
            nome: "Pequeno",
        });
        await connection.getRepository("Portecirurgico").save({
            nome: "M??dio",
        });
        await connection.getRepository("Portecirurgico").save({
            nome: "Grande",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar portes cirurgicos: ', err);
        return false;
    }
}


export const createTipodeCirurgias = async(connection) =>{
    try{
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Aberta",
        });
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Endosc??pica",
        });
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Laparosc??pica",
        });
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Rob??tica",
        });
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Abla????o",
        });
        await connection.getRepository("Tipodecirurgia").save({
            nome: "Bi??psia",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar tipo de cirurgias: ', err);
        return false;
    }
}

export const createCid10 = async(connection) =>{
    try{
        await connection.getRepository("Cid10").save({
            nome: "N48",
        });
        await connection.getRepository("Cid10").save({
            nome: "N47",
        });
        await connection.getRepository("Cid10").save({
            nome: "Z30.2",
        });
        await connection.getRepository("Cid10").save({
            nome: "N40",
        });
        await connection.getRepository("Cid10").save({
            nome: "Z12",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar cid10: ', err);
        return false;
    }
}

export const createGruposCirurgicos = async(connection) =>{
    try{
        await connection.getRepository("Gruposcirurgico").save({
            nome: "URETEROLITOTRIPSIA R??GIDA LASER",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "URETERORRENOLITOTRIPSIA FLEX??VEL LASER",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "PASSAGEM DE CATETER DUPLO JOTA",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "RETIRADA DE CATETER DUPLO JOTA",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "RTU-Pr??stata",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "RTU-Bexiga",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Uretrotomia Interna",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Hernioplastia Inguinal Laparosc??pica",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Prostatectomia Radical Laparosc??pica",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Nefrectomia Total/Radical Laparosc??pica",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Nefrectomia Parcial Laparosc??pica",
        });
        await connection.getRepository("Gruposcirurgico").save({
            nome: "Adrenalectomia Total/Radical Laparosc??pica",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar grupos cirurgicos: ', err);
        return false;
    }
}

export const createMateriaisOPME = async(connection) =>{
    try{
        await connection.getRepository("MaterialOPME").save({
            groupId: 1,
            nome: "2 Fios Guia Hidrof??licos / 1 Fibra Laser / 1 Basket / 1 Cateter Bal??o de Dilata????o Ureteral / 1 Cateter Duplo Jota",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 2,
            nome: "2 Fios Guia Hidrof??licos /1 Fibra Laser / 1 Basket / 1 Cateter Bal??o de Dilata????o Ureteral / 1 Bainha Ureteral / 1 Sistema IrrigaFlow / 1 Cateter Duplo Jota2 Fios Guia Hidrof??licos /1 Fibra Laser / 1 Basket / 1 Cateter Bal??o de Dilata????o Ureteral / 1 Bainha Ureteral / 1 Sistema IrrigaFlow / 1 Cateter Duplo Jota",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 3,
            nome: "2 Fios Guia Hidrof??licos / 1 Cateter Duplo Jota / 1 Cateter Bal??o de Dilata????o Ureteral / 1 Basket",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 4,
            nome: "2 Fios Guia Hidrof??licos / 1 Basket",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 5,
            nome: "1 Al??a de Ressec????o Termoel??trica Bipolar / 1 Al??a Tipo Roller Ball Bipolar / 1 Evacuador de Ellick / 1 Fio Guia Hidrof??lico",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 6,
            nome: "1 Al??a de Ressec????o Termoel??trica Bipolar / 1 Al??a Tipo Roller Ball Bipolar / 1 Evacuador de Ellick / 1 Fio Guia Hidrof??lico",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 7,
            nome: "1 Faca de Sacks / 1 Fio Guia Hidrof??lico / 1 Evacuador de Ellick",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 8,
            nome: "01 Space-Maker Bal??o Oval Covidien / 02 cargas Clip Hemolok Roxo 10mm  / 01 Tela Marlex 30x30cm  / 01 Grampeador Absorba Tack da Covidien 30 grampos / 02 trocartes descart??veis 5mm",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 9,
            nome: "01 Space-Maker Bal??o Oval Covidien / 02 trocartes descart??veis 12mm / 02 trocartes descart??veis 5mm / 05 cargas de clip Hemolok Roxo de 10mm / 03 cargas de clip Hemolok Verde de 5mm / 01 Aspirador Laparosc??pico Descart??vel / 03 Fios de Sutura Barbado tipo V-Loc / 01 Selante Hemost??tico STARSIL Hemostat 3G + 01 Ponta Aplicadora UNITIP-XL / 01 EndoCatch Bag 10mm / 01 Dreno de Blake + 01 P??ra/Reservat??rio do dreno / 01 Par de meias el??sticas / 01 Par de Perneiras Compress??o Pneum??tica Intermitente",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 10,
            nome: "01 Space-Maker Bal??o Redondo Covidien / 02 trocartes descart??veis 12mm / 02 trocartes descart??veis 5mm / 05 cargas de clip Hemolok Roxo de 10mm / 03 cargas de clip Hemolok Verde de 5mm / 01 Aspirador Laparosc??pico Descart??vel / 02 Fios de Sutura Barbado tipo V-Loc / 01 Selante Hemost??tico STARSIL Hemostat 3G + 01 Ponta Aplicadora UNITIP-XL / 01 EndoCatch Bag 15mm / 01 Dreno de Blake + 01 P??ra/Reservat??rio do dreno / 01 Par de meias el??sticas / 01 Par de Perneiras Compress??o Pneum??tica Intermitente",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 11,
            nome: "01 Space-Maker Bal??o Redondo Covidien / 02 trocartes descart??veis 12mm / 02 trocartes descart??veis 5mm / 05 cargas de clip Hemolok Roxo de 10mm / 03 cargas de clip Hemolok Verde de 5mm / 01 Aspirador Laparosc??pico Descart??vel / 03 Fios de Sutura Barbado tipo V-Loc / 01 Selante Hemost??tico STARSIL Hemostat 3G + 01 Ponta Aplicadora UNITIP-XL / 01 EndoCatch Bag 10mm / 01 Fio Guia Hidrof??lico / 01 Cateter Duplo Jota / 01 Dreno de Blake + 01 P??ra/Reservat??rio do dreno / 01 Par de meias el??sticas / 01 Par de Perneiras Compress??o Pneum??tica Intermitente",
        });
        await connection.getRepository("MaterialOPME").save({
            groupId: 12,
            nome: "01 Space-Maker Bal??o Redondo Covidien / 02 trocartes descart??veis 12mm / 02 trocartes descart??veis 5mm / 05 cargas de clip Hemolok Roxo de 10mm / 03 cargas de clip Hemolok Verde de 5mm / 01 Aspirador Laparosc??pico Descart??vel / 02 Fios de Sutura Barbado tipo V-Loc / 01 Selante Hemost??tico STARSIL Hemostat 3G + 01 Ponta Aplicadora UNITIP-XL / 01 EndoCatch Bag 10mm / 01 Dreno de Blake + 01 P??ra/Reservat??rio do dreno / 01 Par de meias el??sticas / 01 Par de Perneiras Compress??o Pneum??tica Intermitente",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar grupos cirurgicos: ', err);
        return false;
    }
}

export const createMateriaisPermanentes = async(connection) =>{
    try{
        await connection.getRepository("MaterialPermanente").save({
            groupId: 1,
            nome: "Ureterosc??pio Semi-R??gido / Cistosc??pio / Radioscopia / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 2,
            nome: "Ureterosc??pio Semi-R??gido / Ureterosc??pio Flex??vel / Cistosc??pio / Radioscopia / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 3,
            nome: "Ureterosc??pio Semi-R??gido / Cistosc??pio / Radioscopia / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 4,
            nome: "Ureterosc??pio Semi-R??gido / Cistosc??pio / Radioscopia / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 5,
            nome: "Ressectosc??pio Bipolar / Cistosc??pio / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 6,
            nome: "Ressectosc??pio Bipolar / Cistosc??pio / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 7,
            nome: "Uretr??tomo / Cistosc??pio / Set de V??deo",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 8,
            nome: "Set de V??deo / ??tica Laparosc??pica 10mm de 0?? / Caixa Pin??as Laparoscopia",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 9,
            nome: "Set de V??deo / ??tica Laparosc??pica 10mm de 0?? / ??tica Laparosc??pica 10mm de 30?? / Caixa Pin??as Laparoscopia",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 10,
            nome: "Set de V??deo / ??tica Laparosc??pica 10mm de 0?? / ??tica Laparosc??pica 10mm de 30?? / Caixa Pin??as Laparoscopia",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 11,
            nome: "Set de V??deo / ??tica Laparosc??pica 10mm de 0?? / ??tica Laparosc??pica 10mm de 30?? / Cistosc??pio / Caixa Pin??as Laparoscopia",
        });
        await connection.getRepository("MaterialPermanente").save({
            groupId: 12,
            nome: "Set de V??deo / ??tica Laparosc??pica 10mm de 0?? / ??tica Laparosc??pica 10mm de 30?? / Caixa Pin??as Laparoscopia",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar grupos cirurgicos: ', err);
        return false;
    }
}


export const createEmpresaMateriais = async(connection) =>{
    try{
        await connection.getRepository("Empresamaterial").save({
            nome: "Storm",
        });
        await connection.getRepository("Empresamaterial").save({
            nome: "Boston",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar empresa de materiais: ', err);
        return false;
    }
}

export const createTipoAnestesias = async(connection) =>{
    try{
        await connection.getRepository("Tipoanestesia").save({
            nome: "Sem Anestesista",
        });
        await connection.getRepository("Tipoanestesia").save({
            nome: "Da Equipe",
        });
        await connection.getRepository("Tipoanestesia").save({
            nome: "Da Casa",
        });
        await connection.getRepository("Tipoanestesia").save({
            nome: "A Definir",
        });
        return true;
    } catch (err){
        console.log('Erro ao criar anestesias: ', err);
        return false;
    }
}

export const createCirurgias = async(connection) =>{
    try{
        await connection.getRepository("Cirurgia").save({
            nome: "URETERORRENOLITOTRIPSIA FLEXIVEL A LASER UNILATERAL",
            tuss: "31102360"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "URETERORRENOLITOTRIPSIA RIGIDA A LASER UNILATERAL",
            tuss: "31102565"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "NEFROLITOTRIPSIA PERCUTANEA UNILATERAL",
            tuss: "31101275"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "CISTOLITOTRIPSIA LASER",
            tuss: "31103561"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "RETIRADA ENDOSCOPICA DE CALCULO DE URETER UNILATERAL",
            tuss: "31102220"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "COLOCACAO URETEROSCOPICA DE DUPLO J UNILATERAL",
            tuss: "31102077"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "RETIRADA ENDOSCOPICA DE DUPLO J",
            tuss: "31103472"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "DILATACAO ENDOSCOPICA UNILATERAL",
            tuss: "31102085"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "PIELOGRAFIA PERCUTANEA",
            tuss: "40813886"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "COLOCACAO NEFROSCOPICA DE DUPLO J UNILATERAL",
            tuss: "31102069"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "NEFROSTOMIA PERCUTANEA UNILATERAL",
            tuss: "31101313"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "CALCULO VESICAL - EXTRACAO ENDOSCOPICA",
            tuss: "31103057"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "POSTECTOMIA",
            tuss: "31206220"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "PL??STICA DE FREIO",
            tuss: "31206212"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "P??NIS CURVO",
            tuss: "31206182"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "URETROPLASTIA ANTERIOR",
            tuss: "31104193"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "MEATOPLASTIA",
            tuss: "31104134"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "ELETROCOAGULA????O DE LES??ES CUT??NEAS",
            tuss: "31206050"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "BI??PSIA DE P??NIS",
            tuss: "31206034"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "CIRURGIA ESTERILIZADORA MASCULINA",
            tuss: "31205070"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "HIDROCELECTOMIA",
            tuss: "31203043"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "ORQUIDOPEXIA",
            tuss: "31203060"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "ORQUIDOPEXIA LAPAROSC??PICA",
            tuss: "31203132"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "VARICOCELE",
            tuss: "31203124"
        });
        await connection.getRepository("Cirurgia").save({
            nome: "BI??PSIA DE TEST??CULO",
            tuss: "31203027"
        });
        return true;
    } catch (err){
        console.log('Erro ao criar cirurgia: ', err);
        return false;
    }
}




