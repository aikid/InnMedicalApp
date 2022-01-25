import React, {useEffect, useState, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { initMigrations, checkDatabase } from './src/service/migrationService';
import AppStack from './src/routes/AppStack';
import Load from './src/pages/Load';

export default function App() {
    // set load screen state
    const [loadData, setLoadData ] = useState(false);
   // add a useCallback hook
   const connect = useCallback(async () => {
    const finishSetup = await initMigrations();
    if(finishSetup) setLoadData(true);
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
