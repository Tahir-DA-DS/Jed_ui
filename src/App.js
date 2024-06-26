import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registration';
import Detailspage from './components/details';
import Dialog from './components/dialog';
import './App.css';
import Header from './components/navsection';
import CreateRRR from './components/RRRgen';
import Footer from './components/footer';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Check if it's the user's first visit
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    if (!isFirstVisit) {
      setShowDialog(true);
      localStorage.setItem('isFirstVisit', 'true');
    }
  }, []);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/details" element={<Detailspage />} />
            <Route path="/gen-invoice" element={<CreateRRR />} />
          </Routes>
        </main>
        <Footer />
        {showDialog && <Dialog onClose={handleCloseDialog} />}
      </div>
    </Router>
  );
}

export default App;
