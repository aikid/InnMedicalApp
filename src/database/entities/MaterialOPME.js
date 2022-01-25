import { EntitySchema } from "typeorm";

const MaterialOPME = new EntitySchema({
  name: "MaterialOPME", // Entity name (your "Model")
  tableName: "materiaisopme", // database table
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

export default MaterialOPME;