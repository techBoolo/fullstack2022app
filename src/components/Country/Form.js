import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const Form = ({ searchTerm, setSearchTerm }) => {

  return (
    <Box>
      <TextField
        label='Search country'
        size='small'
        autoComplete='off'
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
      />
    </Box>
  );
};

export default Form
