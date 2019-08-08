import React from 'react';
import './header.css'


const Header = () => (
  <div className="header">
    <div className="logo">
      <img src="/img/logo.png" alt="logo"/>
    </div>
    
    <div className="header-menu">
       
          <div className="header-menu-item">
            <a href="#tre">Parrainage TRE</a>
          </div>
          <div className="header-menu-item">
            <a href="#yasmine">PACK Yasmine</a>
          </div>
          </div>
     
    
    <div className="header-message-content">
      <div className="header-message">
        <strong>Parrainez</strong> <small>vos proches résidents* <br />à</small> <span>l'étranger et gagnez des cadeaux !</span>
      </div>
    </div>
    <div className="the-parrainage">
      <div className="the-parrainage-content">
        <span className="the">
          TRe
        </span>
        <span className="parrainage">
          Parrainage
        </span>
      </div>
    </div>
  </div>
)

export default Header;
