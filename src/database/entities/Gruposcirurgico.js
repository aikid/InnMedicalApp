import { EntitySchema } from "typeorm";

const Gruposcirurgico = new EntitySchema({
  name: "Gruposcirurgico", // Entity name (your "Model")
  tableName: "gruposcirurgicos", // database table
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

export default Gruposcirurgico;