import React, {useState} from 'react';
import Header from './components/header'
import Main from './components/main'

import './App.scss'

function App() {

  const [login, setLogin] = useState(false);

  return (
    <div className="dashboard">
      <Header setLogin={setLogin} login={login} />
      <Main />
    </div>
  );
}

export default App;
