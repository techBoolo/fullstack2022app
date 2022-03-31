import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Navbar = (props) => {

  return (
    <Box sx={{ width: 1, height: '67px', marginBottom: '10px', bgcolor: '#171717', display: 'flex', alignItems: 'center'}}>
      <Link to='/' component={RouterLink} sx={{ textDecoration: 'none' }}>
        <Typography variant='h6' sx={{ padding: '20px', color: '#f4f4f4'}}>Apps</Typography>
      </Link>
    </Box>
  );
};

export default Navbar
