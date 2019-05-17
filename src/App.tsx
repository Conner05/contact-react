import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from './contacts/Contacts';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/contacts" component={Contacts} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
