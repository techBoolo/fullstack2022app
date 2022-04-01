import { useState, useEffect } from 'react'
import { people as peopleData } from '../../data/people.js'
import Filter from './Filter.js'
import Form from './Form.js'
import Result from './Result.js'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

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
    setPeople([...people, {id: people.length + 1, name: name.trim(), number: number.trim() }])
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
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Form name={name} setName={setName} number={number} setNumber={setNumber} handleSubmit={handleSubmit} />
      <Result filterResult={filterResult} />
    </Stack>
  );
};

export default Phonebook
