import React, { Component } from "react";
import "./style.scss";

import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Card-wrapper">
          {this.props.characters.map((char) => (
            <Card setCharacter={this.props.setCharacter} character={char}></Card>
          ))}
        </div>
        <Pagination></Pagination>
      </div>
    );
  }
}

export default Main;
