import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Filter = ({searchTerm, setSearchTerm}) => {

  return (
    <Box>
      <TextField
        label='Search'
        value={searchTerm}
        onChange={ev => setSearchTerm(ev.target.value)}
        size='small'
        margin='normal'
      />
    </Box>
  );
};

export default Filter
