import { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Result = ({ filterResult }) => {

  return (
    <>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Numbers</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 1}}>
        {
          (filterResult.length === 0)
            ? <Typography>No result found</Typography>
            : 
              filterResult.map(person => (
                <Fragment key={person.id}>
                  <Typography key={person.name}>{ person.name }</Typography>
                  <Typography sx={{ ml: '10px' }}>{person.number }</Typography>
                </Fragment>
              ))
        } 
      </Box>
    </>
  );
};

export default Result
