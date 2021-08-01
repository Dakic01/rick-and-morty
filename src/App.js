import { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./pages/Main";
import Character from "./pages/Character";
import './aos';


class App extends Component {
  state = {
    characters: [],
    charID: null,
    page: 1,
  };

  setCharacter = (id) => {
    this.setState({ charID: id });
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1, characters: [] });
  };

  componentDidMount() {
    if (!this.state.characters.length)
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ characters: data.results });
        });
  }

  componentDidUpdate() {
    if (!this.state.characters.length)
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ characters: data.results });
        });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.charID ? (
          <Character
            setCharacter={this.setCharacter}
            character={this.state.characters.find(
              (e) => e.id === this.state.charID
            )}
          />
        ) : (
          <Main
            setCharacter={this.setCharacter}
            characters={this.state.characters}
          />
        )}
      </div>
    );
  }
}

export default App;
