import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CountryList = ({ searchResult, setSearchTerm }) => {

  return (
    <>
      {
        searchResult.map(country => (
          <Box key={country.name.common} sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography>{ country.name.official}</Typography>
            <Button sx={{ ml: '10px'}} onClick={() => setSearchTerm(country.name.common)}>show</Button>
          </Box>
        ))
      }  
    </>
  );
};

export default CountryList
