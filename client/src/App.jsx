import React from 'react';
import '../styles.css';
import RequestForm from './components/RequestForm/RequestForm.jsx';
import ResponseDisplay from './components/ReponseDisplay/ResponseDisplay.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <div className='App'>
      <RequestForm />
      <ResponseDisplay />
      <NavBar />
    </div>
  );
};

export default App;
