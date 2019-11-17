import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import icons from './icons'
import Tile from './components/Tile/Tile.js'
import Search from './components/Search/Search.js'
import Pockemon from './components/Pockemon/Pockemon.js'

class App extends Component {
  state = {
      searching: false,
      pokemons: []
  }

  inputHandler = (e) => {
      const input = e.target.value
      const selected = this.state.pokemons.find(pokemon => pokemon.name === input)
      if (selected) {
        console.log(selected)
          this.fetchPockemon(selected.url)
      } else {
          this.setState({
              searching: false
          })
      }
  }

  componentDidMount () {
      axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=1000' )
          .then( response => {
              this.setState({pokemons: response.data.results});
          } );
  }

  fetchPockemon(url) {
      axios.get( url )
        .then( response => {
            this.setState({
              pockemon: response.data,
              searching: true})
        } );
  }

  render() {
      const style = {
          display: 'flex',
          flexDirection: 'column',
          margin: '1rem',
          height: '3rem',
      };

      return (
        <div className="App">

      <div className="search">
          <Search pokemons={this.state.pokemons} selected={this.inputHandler}/>
      </div>
      <div className="tile-list">
        { this.state.searching ? <Pockemon item={this.state.pockemon}/> :
                icons.map(icon => {
                    return  (<Tile style={style} image={icon} key={icon.id}/>)
                })
        }
        </div>
        </div>
      );
    }
}

export default App;
