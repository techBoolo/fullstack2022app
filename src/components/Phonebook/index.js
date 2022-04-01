import { useState, useEffect, Fragment } from 'react'
import { people as peopleData } from '../../data/people.js'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Phonebook = (props) => {
  const [ people, setPeople ] = useState(peopleData)
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ filterResult, setFilterResult ] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    let dup = people.find(person => person.name.toLowerCase() === name.toLowerCase().trim())
    if(dup) {
      alert(`${name} already in the phonebook`)
      setName('')
      setNumber('')
      return
    }
    setPeople([...people, { name: name.trim(), number: number.trim() }])
    setName('')
    setNumber('')
  }

  useEffect(() => {
    const term = new RegExp(`^${searchTerm.trim()}`, 'i')
    const result = people.filter(person => person.name.match(term))
    setFilterResult(result)
  }, [people, searchTerm])

  return (
    <Stack spacing={1} sx={{ mx: '20px' }}>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Phonebook</Typography>
      <Box>
        <TextField
          label='Search'
          value={searchTerm}
          onChange={ev => setSearchTerm(ev.target.value)}
          size='small'
          margin='normal'
        />
      </Box>
      <Typography variant='h6'>Add New Contact</Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ }}>
        <Box sx={{ mb: '10px'}}>
          <Box>
            <TextField
              label='Name' 
              value={name}
              onChange={ev => setName(ev.target.value)}
              size='small'
              autoFocus
              margin='normal'
            />
          </Box>
          <Box>
            <TextField
              label='Number' 
              value={number}
              onChange={ev => setNumber(ev.target.value)}
              size='small'
              margin='normal'
            />
          </Box>
        </Box>
        <Button type='submit' variant='contained'>add</Button>
      </Box>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Numbers</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 1}}>
        {
          (filterResult.length === 0)
            ? <Typography>No result found</Typography>
            : 
              filterResult.map(person => (
                <Fragment key={person.id}>
                  <Typography key={person.name}>{ person.name }</Typography>
                  <Typography component='span' sx={{ ml: '10px' }}>{person.number }</Typography>
                </Fragment>
              ))
        } 
      </Box>
    </Stack>
  );
};

export default Phonebook
