import { EntitySchema } from "typeorm";

const Tipodeprocesso = new EntitySchema({
  name: "Tipodeprocesso", // Entity name (your "Model")
  tableName: "tipodeprocessos", // database table
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

export default Tipodeprocesso;