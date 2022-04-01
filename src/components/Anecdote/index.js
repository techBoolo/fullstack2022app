import { useState } from 'react'
import { anecdotes } from '../../data/anecdote.js'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const Anecdote = (props) => {
  const [ selected, setSelected ] = useState(Math.floor(Math.random() * anecdotes.length))

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleAnecdoteVote = () => {

  }
  return (
    <Stack spacing={1} sx={{ mx: '20px'}}>
      <Typography>
        { anecdotes[selected].anecdote }
      </Typography>
      <Box sx={{my: '10px' }}>
        <Button variant='outlined' onClick={handleAnecdoteVote} sx={{ mr: '10px'}}>
          vote
        </Button>
        <Button variant='outlined' onClick={handleNextAnecdote}>
          Next Anecdote
        </Button>
      </Box>
    </Stack>
  );
};

export default Anecdote
