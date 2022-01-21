import { EntitySchema } from "typeorm";

const Cid10 = new EntitySchema({
  name: "Cid10", // Entity name (your "Model")
  tableName: "cid10s", // database table
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

export default Cid10;