import { EntitySchema } from "typeorm";

const Tipoanestesia = new EntitySchema({
  name: "Tipoanestesia", // Entity name (your "Model")
  tableName: "Tipoanestesias", // database table
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

export default Tipoanestesia;