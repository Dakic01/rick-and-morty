import React, { Component } from "react";
import './style.scss';
import headline from '../../img/rickandmorty.png';

class Header extends Component {
  render() {
    return <div className="Header">
      <img src={headline} alt="headline"/>
    </div>;
  }
  
}

export default Header;
