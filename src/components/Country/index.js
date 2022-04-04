import { useState, useEffect } from 'react'
import { getCountries } from '../../services/country.js'

import Form from './Form.js'
import CountryList from './CountryList.js'
import CountryDetail from './CountryDetail.js'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Country = (props) => {
  const [ countries, setCountries ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResult, setSearchResult] = useState([])

  useEffect(() => {
    async function fetchCountries() {
      const data = await getCountries();
      setCountries(data)
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const term = new RegExp(`${searchTerm}`, 'i')
    const copyCountries = [...countries]
    setSearchResult(copyCountries.filter( country => country.name.common.match(term)))
  }, [searchTerm, countries])

  return (
    <Stack spacing={1} sx={{ mx: '20px' }}>
      <Typography variant='h6' sx={{ textDecoration: 'underline'}}>Country Info</Typography>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Box>
        {
          (searchResult.length === 0)
            ? <Typography>Please enter a hint, No match found</Typography>
            : (
                (searchResult.length > 10)
                  ? <Typography>too many matches, be more specific</Typography>
                  : (
                      (searchResult.length > 1)
                        ? <CountryList searchResult={searchResult} setSearchTerm={setSearchTerm} />
                        : <CountryDetail searchResult={searchResult[0]} />
                    ) 
              )
        }
      </Box>
    </Stack>
  );
};

export default Country
