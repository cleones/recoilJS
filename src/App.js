import React from 'react';
import { RecoilRoot } from 'recoil';
// import CharacterCounter from './components/CharacterCounter';
import Routes from './routes';

function App() {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  );
}

export default App;
