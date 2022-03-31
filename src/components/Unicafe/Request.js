import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Request = ({ password, handleRequest, request }) => {

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Button 
          disabled={request} 
          variant='outlined' 
          sx={{ marginRight: '10px' }} 
          onClick={handleRequest}
        >
         feedback
        </Button>
        { password && <Typography sx={{ fontSize: '20px'}}>{password}</Typography> }
      </Box>
    </>
  );
};

export default Request
