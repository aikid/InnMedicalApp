import { EntitySchema } from "typeorm";

const Triagem = new EntitySchema({
  name: "Triagem", // Entity name (your "Model")
  tableName: "triagens", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    nome: {
      type: "text",
    },
    cpf: {
        type: "text",
    },
    email: {
        type: "text",
    },
    telefone1: {
        type: "text",
    },
    telefone2: {
        type: "text",
    },
    consultorio: {
        type: "text",
    },
    tipodeProcesso: {
        type: "text",
    },
    porteCirurgico: {
        type: "text",
    },
    cirurgiaPrincipal: {
        type: "text",
    },
    oncologica: {
        type: "text",
    },
    cid10: {
        type: "text",
    },
    diagnostico: {
        type: "text",
    },
    cirurgias: {
        type: "text",
    },
    gruposcirurgicos: {
        type: "text",
    },
    materialOpme: {
        type: "text",
    },
    materialPermanente: {
        type: "text",
    },
    empresaMaterial: {
        type: "text",
    },
    anestesista: {
        type: "text",
    },
    reservaCti: {
        type: "text",
    },
    diariasCti: {
        type: "text",
    },
    tipagemSanguinea: {
        type: "text",
    },
    reservaSangue: {
        type: "text",
    },
    tipoQuantidade: {
        type: "text",
    },
    orientacoes: {
        type: "text",
    },
  },
});

export default Triagem;