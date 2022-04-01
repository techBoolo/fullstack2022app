import { Fragment } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const Result = ({ filterResult, handleDelete }) => {

  return (
    <>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Numbers</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 1}}>
        {
          (filterResult.length === 0)
            ? <Typography>No result found</Typography>
            : 
              filterResult.map(person => (
                <Fragment key={person.id}>
                  <Typography key={person.name}>{ person.name }</Typography>
                  <Typography sx={{ ml: '10px' }}>{person.number }</Typography>
                  <IconButton onClick={() => handleDelete(person.id)}><DeleteIcon /></IconButton>
                </Fragment>
              ))
        } 
      </Box>
    </>
  );
};

export default Result
