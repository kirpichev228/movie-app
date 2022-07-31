import React from 'react';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App bg-[#2e2b30] text-white flex flex-col items-center">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
