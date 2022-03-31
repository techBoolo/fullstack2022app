import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'

const Feedback = (props) => {
  const {handleRatingCancel, handleCustomerFeedback, rating, setRating } = props  

  return (
    <>
      <Stack spacing={2}>
        <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Rating</Typography>
        <Stack>
          <Typography>Service</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Rating
              value={rating.service}
              onChange={(ev, newValue) => setRating({...rating, service: newValue})}
              precision={0.5}
            />
            <Typography sx={{ mx: '10px', fontSize: '18px'}} >{rating.service}/5</Typography>
          </Box>
        </Stack>
        <Stack>
          <Typography>Food</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Rating
              value={rating.food}
              onChange={(ev, newValue) => setRating({...rating, food: newValue})}
              precision={0.5}
            />
            <Typography sx={{ mx: '10px', fontSize: '18px'}} >{rating.food}/5</Typography>
          </Box>
        </Stack>
        <Stack direction='row'>
          <Button variant='contained' onClick={handleCustomerFeedback}>Ok</Button>
          <Button onClick={handleRatingCancel}>Cancel</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Feedback
