import { Link as RouterLink, Outlet } from 'react-router-dom'
import Link from '@mui/material/Link'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Links = (props) => {

  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <Typography 
          sx={{ border: '1px solid #ccc', 
            bgcolor: '#ccc', 
            height: '40px', 
            padding: '10px', 
            textAlign: 'center'  }}
        >
          app lists
        </Typography>

        <Stack sx={{ }} spacing={1}>
          <Link to='/unicafe' component={RouterLink} 
            sx={{ padding: '5px 10px', textDecoration: 'none', fontSize: '20px' }}
          >
            unicafe
          </Link>
          <Link to='/anecdote' component={RouterLink} 
            sx={{ padding: '5px 10px', textDecoration: 'none', fontSize: '20px' }}
          >
            anecdote
          </Link>
          <Link to='/phonebook' component={RouterLink} 
            sx={{ padding: '5px 10px', textDecoration: 'none', fontSize: '20px' }}
          >
            phonebook
          </Link>
          <Link to='/country' component={RouterLink} 
            sx={{ padding: '5px 10px', textDecoration: 'none', fontSize: '20px' }}
          >
            country
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={8} md={9}>
        <Box sx={{  borderLeft: '1px solid #ccc', paddingTop: '50px' }}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );

};

export default Links
