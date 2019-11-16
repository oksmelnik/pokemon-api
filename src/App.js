import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import icons from './icons'
import Tile from './components/Tile/Tile.js'
import Search from './components/Search/Search.js'

class App extends Component {
  state = {
      searching: false,
      pokemons: []
  }

  inputHandler = (e) => {
      console.log(e)
  }

  componentDidMount () {
      axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=1000' )
          .then( response => {
              this.setState({pokemons: response.data.results});
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

        <Search pokemons={this.state.pokemons} selected={this.inputHandler}/>

        { this.state.searching ? null :
            <div className="tile-list">
                {icons.map(icon => {

                    return  (<Tile style={style} image={icon} key={icon.id}/>)
                })
                }
            </div>
        }



        </div>
      );
    }
}

export default App;
