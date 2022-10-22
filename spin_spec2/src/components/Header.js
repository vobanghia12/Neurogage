import React from 'react';
import './Header.css';
import logoUrl from '../images/logo.svg'


const Header = () => (
    <div className="header">
      <img src={logoUrl} alt="NeuroGauge"/>
    </div>
)

  export default Header;