import { useState, useEffect } from 'react'
import { anecdotes as anecdotesData } from '../../data/anecdote.js'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const Anecdote = (props) => {
  const [ anecdotes, setAnecdotes ] = useState(anecdotesData)
  const [ selected, setSelected ] = useState(Math.floor(Math.random() * anecdotes.length))
  const [ mostVoteAnecdote, setMostVoteAnecdote ] = useState({})

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleAnecdoteVote = () => {
    const copyAnecdotes = [...anecdotes]
    copyAnecdotes[selected] = {...copyAnecdotes[selected], vote: copyAnecdotes[selected].vote + 1 }
    setAnecdotes(copyAnecdotes)
  }


  useEffect(() => {
    const maxVoteAnecdote = () => {
      const maxVote = Math.max(...anecdotes.map(anecdote => anecdote.vote))
      return anecdotes.find(anecdote => anecdote.vote === maxVote)
    }
    setMostVoteAnecdote(maxVoteAnecdote())
  }, [anecdotes])

  return (
    <Stack spacing={1} sx={{ mx: '20px'}}>
      <Typography variant='h6' sx={{ fontWeight: 'bold'}}>Anecdote</Typography>
      <Typography>
        { anecdotes[selected].anecdote }
      </Typography>
      <Typography>
        has <Typography component='span' sx={{ fontWeight: 'bold' }}>{ anecdotes[selected].vote }</Typography> vote/s
      </Typography>
      <Box sx={{my: '10px' }}>
        <Button variant='outlined' onClick={handleAnecdoteVote} sx={{ mr: '10px'}}>
          vote
        </Button>
        <Button variant='outlined' onClick={handleNextAnecdote}>
          Next Anecdote
        </Button>
      </Box>
      {
        (mostVoteAnecdote.vote === 0)
          ? null
          : (
              <>
                <Typography variant='h6' sx={{ fontWeight: 'bold'}}>Anecdote with most vote</Typography>
                <Box>
                  <Typography>{mostVoteAnecdote.anecdote}</Typography>
                  <Typography sx={{ fontWeight: 'bold', my: '10px'}}>with {mostVoteAnecdote.vote} vote</Typography>
                </Box>
              </>
            )
        }
      </Stack>
    );
  };

export default Anecdote
