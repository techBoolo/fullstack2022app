import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Notification = ({ message }) => {

  return (
    <Box sx={{ mx: '20px' }}>
      <Typography sx={{ fontSize: '20px' }}>{ message }</Typography>
    </Box>
  );
};

export default Notification
