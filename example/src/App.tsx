import React, { FC, useState } from 'react';
import storage from 'redux-persist/lib/storage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as XmppProvider } from 'xmpp-react-hooks';
import GlobalContext, { Global } from './contexts/global';
import Routes from './routes';

const { REACT_APP_XMPP_HOSTNAME } = process.env;

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => {
  const [global, setGlobal] = useState<Global>({});

  return (
    <GlobalContext.Provider value={[global, setGlobal]}>
      <XmppProvider
        debug
        hostname={REACT_APP_XMPP_HOSTNAME}
        password={global.password}
        resource="abc"
        storage={storage}
        username={global.username}
      >
        <Router>
          <Routes />
        </Router>
      </XmppProvider>
    </GlobalContext.Provider>
  );
};

App.defaultProps = {};

export default App;
