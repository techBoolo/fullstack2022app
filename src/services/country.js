import axios from 'axios'

const url = 'https://restcountries.com/v3.1/all'

export const getCountries = async () => {
  try {
    const { data } = await axios.get(url)
    return data 
  } catch (error) {
    return []
  }
}
