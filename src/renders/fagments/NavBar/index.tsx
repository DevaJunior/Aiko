import './styles.css';
import React from 'react';

import imgLogo from '../../../img//logos/aiko.png';
import imgOpti from '../../../img/icons/icn_menu_001.png';

const NavBar: React.FC = () => {

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-cont'>
          <li className='navbar-title'>
            <div className='nav-logo'><img src={imgLogo} alt="" /></div>
          </li>

          <ul className='navbar-pags'>
            <li>
              <p>Monitoramento de Equipamentos Florestais</p>
            </li>
          </ul>

          <ul className='navbar-itens'>
            <li id='navitem-drawerlayout' className='style-div-btn-img'> <img className='style-div-btn-img_70' src={imgOpti} alt="Opções" /> </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
