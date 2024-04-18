import React, { useState, useEffect } from 'react';
import RootStack from './navigators/RootStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AgentContext } from './components/AgentContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import Splash from './components/Splash';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [agentData, setAgentData] = useState(null);

  const checkAgentData = async () => {
    await AsyncStorage.getItem('agentSessionData')
      .then((agentSessionData) => {
        if (agentSessionData !== null) {
          setAgentData(JSON.parse(agentSessionData));
        } else {
          setAgentData(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setAppReady(true);
      })
  }

  useEffect(() => {
    checkAgentData();
  }, []);

  if (!appReady) {
    return <Splash />
  }

  return (
    <Provider store={store}>
      <AgentContext.Provider value={{ agentData, setAgentData }}>
        <RootStack />
      </AgentContext.Provider>
    </Provider>
  );
}