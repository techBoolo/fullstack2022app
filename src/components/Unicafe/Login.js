import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login = ({ handleLogin, customerPassword, setCustomerPassword, handleCancel }) => {

  return (
    <>
      <Box sx={{}}>
        <Typography variant='h6'>login</Typography>
        <Box component='form' onSubmit={handleLogin}>
          <TextField 
            value={customerPassword} 
            onChange={(ev) => setCustomerPassword(ev.target.value)} 
            size='small' 
            autoComplete='off'
            helperText='use the above code to login' 
          />
          <Box>
            <Button 
              variant='contained' 
              type='submit' 
              disabled={Boolean(customerPassword.length !== 4)}
            >
              login
            </Button>
            <Button onClick={handleCancel}>cancel</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login
