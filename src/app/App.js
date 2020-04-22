import React from 'react';
import './App.css';
import ProjectRouter from '../containers/ProjectRouter'
import MetaMaskContainer from '../containers/MetaMaskContainer';
function App() {

  return (
    <MetaMaskContainer>
      <ProjectRouter/>
    </MetaMaskContainer>
  );
}

export default App;
