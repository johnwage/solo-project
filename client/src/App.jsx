import React from 'react';
import '../styles.css';
import RequestForm from './components/RequestForm/RequestForm.jsx';
import ResponseDisplay from './components/ReponseDisplay/ResponseDisplay.jsx';

const App = () => {
  return (
    <div className='App'>
      <RequestForm />
      <ResponseDisplay />
    </div>
  );
};

export default App;
