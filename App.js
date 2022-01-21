import React, {useEffect, useState, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import config from "./src/database/config"; // add
import { createConnection } from "typeorm"; // add
import AppStack from './src/routes/AppStack';
import Load from './src/pages/Load';

export default function App() {
    // set load screen state
    const [loadData, setLoadData ] = useState(false);
   // add a useCallback hook
   const connect = useCallback(async () => {
    try {
      const connection = await createConnection(config); // create a connection with our config
      const Cid10 = await connection.getRepository("Cid10").find();
      console.log(Cid10); // empty at first run
    } catch (err) {
      console.log(err); // check (or deal) with connection errors
    }
  });

  // Important: connect inside a dependency-free useEffect hook to avoid multiple calls.
  useEffect(() => {
    connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  }, []);

  return (
    <>
      {!loadData ? (
          <Load/>
        ):(
          <>
            <AppStack />
          </>
        )}
        <StatusBar style="auto" />
    </>
  );
}
