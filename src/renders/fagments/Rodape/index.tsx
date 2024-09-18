import './styles.css';

import React from 'react';

import imgRedeFacee from '../../../img/icons/icn_rede_facebook.png';
import imgRedeInsta from '../../../img/icons/icn_rede_instagram.png';
import imgRedeX from '../../../img/icons/icn_rede_x.png';
import imgRedeLink from '../../../img/icons/icn_rede_linkedin.png';

const Rodape: React.FC = () => {

  const numCell = '5535988672326';
  const openWhatsApp = () => {
    window.open(`https://wa.me/${numCell}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='rodape-container'>
      <div className="container-rodape">

        <div className='rodape-grid'>
          <div className='rodape-grid-item-redes'>
            <h2>Devair Jr.</h2>
            <div className='rodape-redes-txt'>
              <p>Visibilidade e Alcance</p>
              <p>Visibilidade e Alcance</p>
              <p>Visibilidade e Alcance</p>
            </div>
            <div className='rodape-redes'>
              <a href="https://www.facebook.com/Deusvair/?locale=pt_BR" target="_blank" rel="noreferrer" ><div><img src={imgRedeFacee} alt="" /></div></a>
              <a href="https://www.instagram.com/devair.junior/" target="_blank" rel="noreferrer" ><div><img src={imgRedeInsta} alt="" /></div></a>
              {/* <a href=""><div><img src={imgRedeX} alt="" /></div></a> */}
              <a href="https://www.linkedin.com/in/devair-junior-b9937a280/" target="_blank" rel="noreferrer" ><div><img src={imgRedeLink} alt="" /></div></a>              
            </div>
          </div>
          <div className='rodape-grid-item'>
            <p className='rodape-grid-item-list-tittle'>H O M E</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
          </div>
          <div className='rodape-grid-item'>
            <p className='rodape-grid-item-list-tittle'>C O M P A H I A</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
            <p className='rodape-grid-item-list-txt'>...</p>
          </div>
          <div className='rodape-grid-item'>
            <p className='rodape-grid-item-list-tittle'>C O N T A T O</p>
            <p className='rodape-grid-item-list-cell' onClick={openWhatsApp}>(35) 9 9867-2326</p>
            <p className='rodape-grid-item-list-txt'>spotted.official@gmail.com</p>
          </div>
        </div>
        <p className='rodape-copy'>Copy @ 2024 <strong>Devair Jr</strong> . Todos os direitos reservados</p>
      </div>
    </div >
  );
};

export default Rodape;