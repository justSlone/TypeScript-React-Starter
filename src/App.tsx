import * as React from 'react';
import { getClassNames } from './App.classNames'
import Hello from './containers/Hello';

const logo = require('./logo.svg');

function App() {
  const { app, appHeader, appIntro, appLogo } = getClassNames();
  return (
    <div className={app}>
      <div className={appHeader}>
        <img src={logo} className={appLogo} alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className={appIntro}>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello />
    </div>
  );
}

export default App;

