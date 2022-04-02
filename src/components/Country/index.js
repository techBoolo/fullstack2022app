import { useState, useEffect } from 'react'
import { getCountries } from '../../services/country.js'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

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
  }, [searchTerm])

  console.log(searchResult);

  return (
    <Stack spacing={1} sx={{ mx: '20px' }}>
      <Box>
        <TextField
          label='Search country'
          size='small'
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
      </Box>
      <Box>
        {
          (searchResult.length === 0)
            ? <Typography>Please enter a hint, No match found</Typography>
            : (
          (searchResult.length > 10)
            ? <Typography>too many matches, be more specific</Typography>
            : (
              (searchResult.length > 1)
                ? (
                  searchResult.map(country => (
                    <Typography>{ country.name.official}</Typography>
                  ))
                )
                : (
                  <>
                    <Typography variant='h5'>{ searchResult[0]?.name.official}</Typography>
                    <Typography>capital: { searchResult[0]?.capital[0]}</Typography>
                    <Typography>area: { searchResult[0]?.area}</Typography>
                    <Typography>population: { searchResult[0]?.population}</Typography>
                    <Typography variant='h6'>Languages</Typography>
                    <ul>
                      {
                      Object.values(searchResult[0]?.languages).map(lang => (<li>{lang}</li>))
                          }
                    </ul>
                    <Box component='img'
                      alt='flag'
                      src={`${searchResult[0]?.flags['png']}`}
                      sx={{ width: '100px'}}
                    />
                  </>
                )
            ) 
            )
        }
      </Box>
    </Stack>
  );
};

export default Country
