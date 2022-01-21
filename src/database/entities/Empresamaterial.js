import { EntitySchema } from "typeorm";

const Empresamaterial = new EntitySchema({
  name: "Empresamaterial", // Entity name (your "Model")
  tableName: "Empresamateriais", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    nome: {
      type: "varchar",
    },
  },
});

export default Empresamaterial;