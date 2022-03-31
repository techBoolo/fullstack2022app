import { Fragment } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { feedbackExists, total, average, positive  } from '../../utils/helpers.js'

const Result = ({ feedback }) => {

  if(!feedbackExists(feedback)) {
    return <Typography>No feedback yet!</Typography>
  }
  return (
    <>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Statistics</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '1rem'}}>
        <Box sx={{ borderRight: '1px solid #ccc'}}>
          <Typography>Service</Typography> 
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <Typography sx={{ fontWeight: 'bold'}}>rating</Typography> 
            <Typography sx={{ fontWeight: 'bold'}}>total</Typography> 
            {
              Object.keys(feedback.service).map(key => (
                <Fragment key={key}>
                  <Typography>{key}</Typography>
                  <Typography>{feedback.service[key]}</Typography>
                </Fragment>
              ))
            }
          </Box>
        </Box>
        <Box>
          <Typography>Food</Typography> 
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <Typography sx={{ fontWeight: 'bold'}}>rating</Typography> 
              <Typography sx={{ fontWeight: 'bold'}}>total</Typography> 
              {
                Object.keys(feedback.food).map(key => (
                  <Fragment key={key}>
                    <Typography>{key}</Typography>
                    <Typography>{feedback.food[key]}</Typography>
                  </Fragment>
                ))
              }
            </Box>
        </Box>
      </Box>
      <Typography>Summary</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Typography>All</Typography>
        <Typography>{ total(feedback) }</Typography>
        <Typography>Average</Typography>
        <Typography>{ average(feedback).toFixed(2) }</Typography>
        <Typography>Positive</Typography>
        <Typography>{ positive(feedback).toFixed(2) }%</Typography>
      </Box>
    </>
  );
};

export default Result
