import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const CountryDetail = ({ searchResult }) => {

  if(Object.keys(searchResult).length === 0) 
    return null
  return (
    <>
      <Typography variant='h5' sx={{ my: '10px'}}>{ searchResult.name.official}</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
        <Typography>capital:</Typography><Typography>{ searchResult.capital[0]}</Typography>
        <Typography>area:</Typography><Typography>{ searchResult.area}</Typography>
        <Typography>population:</Typography><Typography>{ searchResult.population}</Typography>
      </Box>
      <Typography variant='h6' sx={{ mt: '10px'}}>Languages</Typography>
      <ul>
        {
          Object.values(searchResult.languages).map(lang => (<li key={lang}>{lang}</li>))
        }
      </ul>
      <Box component='img'
        alt='flag'
        src={`${searchResult.flags['png']}`}
        sx={{ width: '100px', my: '10px'}}
      />
      <Typography variant='h6' sx={{ mt: '10px'}}>continents:</Typography>
      <ul>
        {searchResult.continents.map(continent => (<li key={continent}>{continent}</li>))}
      </ul>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
        <Typography>region:</Typography><Typography>{searchResult.region}</Typography>
        <Typography>subRegion:</Typography><Typography>{searchResult.subregion}</Typography>
      </Box>
      <Typography variant='h6' sx={{ mt: '10px'}}>Maps:</Typography>
      <ul>
        {
          Object.keys(searchResult.maps).map( k => 
            <li key={k}><a href={searchResult.maps[k]} target='new'>{k}</a></li> 
          )
        }
      </ul>
    </>
  );
};

export default CountryDetail
