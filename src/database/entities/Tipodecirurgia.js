import { EntitySchema } from "typeorm";

const Tipodecirurgia = new EntitySchema({
  name: "Tipodecirurgia", // Entity name (your "Model")
  tableName: "tipodecirurgias", // database table
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

export default Tipodecirurgia;