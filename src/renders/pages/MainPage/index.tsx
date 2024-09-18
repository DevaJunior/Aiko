import './styles.css'
import React from 'react';

import NavBar from '../../fagments/NavBar';
import Rodape from '../../fagments/Rodape';
import Map from '../../components/Map';

const MainPage: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='div_85' />
      </header>
      <main>
        <Map />
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
  );
};

export default MainPage;
