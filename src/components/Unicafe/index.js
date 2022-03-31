import { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Rating from '@mui/material/Rating'

const Unicafe = (props) => {
  const [ feedback, setFeedback ] =  useState(false); {/* disable feedback button after generating a passwrod */}
  const [ password, setPassword ] = useState(null);  {/* generated password,  */}
  const [ customerPassword, setCustomerPassword ] = useState('')
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ rating, setRating ] = useState({ service: 0, food: 0 })

  const handleFeedback = () => {
    setPassword(Math.random().toString(36).substr(2, 4))
    setFeedback(true)
  }

  const handleLogin = (ev) => {
    ev.preventDefault()
    if(customerPassword === password) {
      setLoggedIn(true)
    }
  }

  const handleCancel = () => {
    setPassword(null)
    setFeedback(false)
    setCustomerPassword('')
  }

  const handleRatingCancel = () => {
    setLoggedIn(false)
    setCustomerPassword('')
  }

  const handleCustomerFeedback = () => {
    console.log('thanks');
  }

  return (
    <Stack spacing={3} sx={{ mx: '20px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Button disabled={feedback} variant='outlined' sx={{ marginRight: '10px' }} onClick={handleFeedback}>feedback</Button>
        { password && <Typography sx={{ fontSize: '20px'}}>{password}</Typography> }
      </Box>

    { loggedIn 
        ? (
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
          )
        :
          ( password && 
            <Box sx={{}}>
              <Typography variant='h6'>login</Typography>
              <Box component='form' onSubmit={handleLogin}>
                <TextField value={customerPassword} onChange={(ev) => setCustomerPassword(ev.target.value)} size='small' helperText='use the above code to login' />
                <Box>
                  <Button variant='contained' type='submit' disabled={Boolean(customerPassword.length !== 4)}>login</Button>
                  <Button onClick={handleCancel}>cancel</Button>
                </Box>
              </Box>
            </Box>
          )
    }
    </Stack>
  );
};

export default Unicafe
