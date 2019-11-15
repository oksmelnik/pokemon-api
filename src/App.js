import React, {Component} from 'react';
import './App.css';
import icons from './icons'
import Tile from './Tile/Tile.js'

class App extends Component {
  state = {
      searching: false,
      searchInput: ''
  }

  inputHandler = (e) => {
      this.setState({searchInput: e.target.value});
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
        <form>
            <input
                type="text"
                placeholder="Search 1,000,000 images"
                value={this.state.searchInput}
                onChange={this.inputHandler}
                >
            </input>
        </form>

        { this.state.searching ? null :
            <div className="tile-list">
                {icons.map(icon => {
                  console.log(icon)
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
