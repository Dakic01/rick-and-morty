import React, { Component } from "react";
import "./style.scss";

class Card extends Component {
  render() {
    return (
      <div
        className="Card" data-aos="fade-left"
        onClick={() => this.props.setCharacter(this.props.character.id)}>

        <p className="id">{this.props.character.id} </p>
        <h3 className="name">{this.props.character.name}</h3>
        <img alt="avatar" src={this.props.character.image} data-aos="fade-up"/>
      </div>
    );
  }
}

export default Card;
