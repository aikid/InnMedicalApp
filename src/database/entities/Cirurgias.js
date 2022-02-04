import { EntitySchema } from "typeorm";

const Cirurgia = new EntitySchema({
  name: "Cirurgia", // Entity name (your "Model")
  tableName: "cirurgias", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    nome: {
      type: "varchar",
    },
    tuss: {
      type: "varchar",
    },
  },
});

export default Cirurgia;