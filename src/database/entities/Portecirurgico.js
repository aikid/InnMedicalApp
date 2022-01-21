import { EntitySchema } from "typeorm";

const Portecirurgico = new EntitySchema({
  name: "Portecirurgico", // Entity name (your "Model")
  tableName: "portecirurgicos", // database table
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

export default Portecirurgico;