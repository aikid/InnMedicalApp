import { EntitySchema } from "typeorm";

const Consultorio = new EntitySchema({
  name: "Consultorio", // Entity name (your "Model")
  tableName: "consultorios", // database table
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

export default Consultorio;