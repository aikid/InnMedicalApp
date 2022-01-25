import { EntitySchema } from "typeorm";

const MaterialPermanente = new EntitySchema({
  name: "MaterialPermanente", // Entity name (your "Model")
  tableName: "materiaispermanentes", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    groupId: {
        type: "int",
    },
    nome: {
      type: "text",
    },
  },
});

export default MaterialPermanente;