import { useState, useEffect } from 'react'
import { getCountries } from '../../services/country.js'

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
      <Box>
        <TextField
          label='Search country'
          size='small'
          autoComplete='off'
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
                    <Box key={country.name.common} sx={{ display: 'flex', alignItems: 'center'}}>
                      <Typography>{ country.name.official}</Typography>
                      <Button sx={{ ml: '10px'}} onClick={() => setSearchTerm(country.name.common)}>show</Button>
                    </Box>
                  ))
                )
                : (
                  <>
                    <Typography variant='h5' sx={{ my: '10px'}}>{ searchResult[0]?.name.official}</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
                      <Typography>capital:</Typography><Typography>{ searchResult[0]?.capital[0]}</Typography>
                      <Typography>area:</Typography><Typography>{ searchResult[0]?.area}</Typography>
                      <Typography>population:</Typography><Typography>{ searchResult[0]?.population}</Typography>
                    </Box>
                    <Typography variant='h6' sx={{ mt: '10px'}}>Languages</Typography>
                    <ul>
                      {
                        Object.values(searchResult[0]?.languages).map(lang => (<li key={lang}>{lang}</li>))
                      }
                    </ul>
                    <Box component='img'
                      alt='flag'
                      src={`${searchResult[0]?.flags['png']}`}
                      sx={{ width: '100px', my: '10px'}}
                    />
                    <Typography variant='h6' sx={{ mt: '10px'}}>continents:</Typography>
                    <ul>
                      {searchResult[0]?.continents.map(continent => (<li key={continent}>{continent}</li>))}
                    </ul>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
                      <Typography>region:</Typography><Typography>{searchResult[0]?.region}</Typography>
                      <Typography>subRegion:</Typography><Typography>{searchResult[0]?.subregion}</Typography>
                    </Box>
                    <Typography variant='h6' sx={{ mt: '10px'}}>Maps:</Typography>
                    <ul>
                      {
                        Object.keys(searchResult[0]?.maps).map( k => 
                          <li key={k}><a href={searchResult[0].maps[k]} target='new'>{k}</a></li> 
                        )
                      }
                    </ul>
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
