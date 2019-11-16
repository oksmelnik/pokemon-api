import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    width: 300,
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});


const Search = ( props ) => {

    const classes = useStyles();

    return (
      <Autocomplete
       id="pokemon-select"
       options={props.pokemons}
       getOptionLabel={option => option.name}
       classes={{
          option: classes.option,
        }}
       style={{
         width: 300,
         background: 'white'
        }}
       onSelect={props.selected}

       renderInput={params => (
         <TextField {...params} label="Select" variant="filled" fullWidth />
       )}
     />
    );

}

export default Search
