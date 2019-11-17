import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import icons from './icons'
import Tile from './components/Tile/Tile.js'
import Search from './components/Search/Search.js'
import Pockemon from './components/Pockemon/Pockemon.js'


const StyledDiv = styled.div`
    text-align: center;
    background-color: #282c34;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: 5vw;
    color: white;
    background: grey;
`

const StyledSearch = styled.div`
      max-width: 80vw;
      width: 300px;
`

const StyledTile = styled.div`
    display: grid;
    overflow: scroll;
    @media (max-width: 350px) {
      grid-template-columns: 80vw;
    }

    @media (min-width: 350px) {
      grid-template-columns: 40vw 40vw;
    }

    @media (min-width: 700px) {
      grid-template-columns: 30vw 30vw 30vw;
    }
    margin: 5vh;
    margin-top: 5vh;
`

class App extends Component {
    state = {
        showSearchResults: false,
        pokemons: []
    }

    componentDidMount () {
        axios.get( 'https://pokeapi.co/api/v2/pokemon?limit=1000' )
            .then( response => {
                this.setState({pokemons: response.data.results});
            } );
    }


    inputHandler = (e) => {
        const input = e.target.value
        const selected = this.state.pokemons.find(pokemon => pokemon.name === input)
        if (selected) {
            this.fetchPockemon(selected.url)
        } else {
            this.setState({
                showSearchResults: false
            })
        }
    }

    fetchPockemon(url) {
        axios.get( url )
          .then( response => {
              this.setState({
                  pockemon: response.data,
                  showSearchResults: true})
          });
    }

    render() {

        return (
            <StyledDiv className="App">
                <StyledSearch>
                    <Search pokemons={this.state.pokemons} selected={this.inputHandler}/>
                </StyledSearch>

                <StyledTile>
                    {
                      this.state.showSearchResults ? <Pockemon item={this.state.pockemon}/> :
                          icons.map(icon => {
                              return  (<Tile image={icon} key={icon.id}/>)
                          })
                    }
                </StyledTile>
            </StyledDiv>
        );
    }
}

export default App;
