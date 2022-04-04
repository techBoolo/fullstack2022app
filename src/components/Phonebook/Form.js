import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Form = (props) => {
  const { name, setName, number, setNumber, handleSubmit } = props

  return (
    <>
      <Typography variant='h6'>Add New Contact</Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <Box sx={{ mb: '10px'}}>
          <Box>
            <TextField
              label='Name' 
              value={name}
              onChange={ev => setName(ev.target.value)}
              size='small'
              autoFocus
              autoComplete='off'
              margin='normal'
            />
          </Box>
          <Box>
            <TextField
              type='number'
              label='Number' 
              value={number}
              onChange={ev => setNumber(ev.target.value)}
              autoComplete='off'
              size='small'
              margin='normal'
            />
          </Box>
        </Box>
        <Button type='submit' variant='contained'>add</Button>
      </Box>
    </>
  );
};

export default Form
