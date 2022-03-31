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
        <Typography sx={{ border: '1px solid #ccc', bgcolor: '#ccc', height: '40px', padding: '10px', textAlign: 'center'  }}>app lists</Typography>
        <Stack sx={{}} spacing={1}>
          <Link to='/unicafe' component={RouterLink} sx={{ padding: '10px', textDecoration: 'none', fontSize: '20px' }}>unicafe</Link>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={8} md={9}>
        <Box sx={{  border: '1px solid #ccc', paddingTop: '50px' }}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );

};

export default Links
