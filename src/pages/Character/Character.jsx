import React, { Component } from "react";
import "./style.scss";

class Character extends Component {
  render() {
    return (
      <div className="Character">
        <img alt="avatar" src={this.props.character.image} data-aos="fade-up" className="avatar"/>
        <h1>{this.props.character.name}</h1>
        <p className="location">Location: {this.props.character.location.name}</p>
        <p className="location">Species: {this.props.character.species}</p>
        <p className="location">Status: {this.props.character.status}</p>
        <button
          onClick={() => this.props.setCharacter(null)}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Character;
