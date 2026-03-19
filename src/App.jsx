import React from 'react';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Preloader />
      <Home />
    </HelmetProvider>
  );
}

export default App;
