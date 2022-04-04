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
    if(!name || !number) {
      alert('please enter name and number')
      return
    }
    let dupIdx = people.findIndex(person => person.name.toLowerCase() === name.toLowerCase().trim())
    if(dupIdx !== -1) {
      const response = window.confirm(`${name} already in the phonebook, change the number?`)
      if(!response) {
        setName('')
        setNumber('')
        return
      } else {
        const p = [...people]
        p.splice(dupIdx, 1, { id: p[dupIdx].id, name, number })
        setPeople(p)
        setName('')
        setNumber('')
        return 
      }
    }
    setPeople([...people, {id: Math.random().toString(36).substr(2, 4), name: name.trim(), number: number.trim() }])
    setName('')
    setNumber('')
  }

  const handleDelete = (id) => {
    const response = window.confirm('confirm Deleting contact.')
    if(response) {
      const result = people.filter(person => person.id !== id) 
      setPeople(result)
    }
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
      <Result filterResult={filterResult} handleDelete={handleDelete} />
    </Stack>
  );
};

export default Phonebook
