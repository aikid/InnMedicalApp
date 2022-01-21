import * as SQLite from "expo-sqlite";

// your entities will be imported here (Car is an example)
import Cid10 from "./entities/Cid10";
import Consultorio from "./entities/Consultorio";
import Empresamaterial from "./entities/Empresamaterial";
import Gruposcirurgico from "./entities/Gruposcirurgico"
import Portecirurgico from "./entities/Portecirurgico"
import Tipoanestesia from "./entities/Tipoanestesia"
import Tipodecirurgia from "./entities/Tipodecirurgia"
import Tipodeprocesso from "./entities/Tipodeprocesso"

const config = {
  database: "innDB",
  driver: SQLite,
  entities: [Cid10,Consultorio,Empresamaterial,Gruposcirurgico,Portecirurgico,Tipoanestesia,Tipodecirurgia,Tipodeprocesso], // your entities will be added here (Car is an example)
  synchronize: true,
  type: "expo",
};

export default config;