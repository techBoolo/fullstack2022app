import { useState } from 'react'

import Request from './Request.js'
import Login from './Login.js'
import Feedback from './Feedback.js'
import Notification from './Notification.js'
import Result from './Result.js'

import Stack from '@mui/material/Stack'

const Unicafe = (props) => {
  const [ request, setRequest ] =  useState(false);  // disable feedback button after generating a passwrod 
  const [ password, setPassword ] = useState(null);  // generated password  
  const [ customerPassword, setCustomerPassword ] = useState('')
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ rating, setRating ] = useState({ service: 0, food: 0 })
  const [ feedback, setFeedback ] = useState({ service: {}, food: {}})

  const [ message, setMessage ] = useState(false)

  const reset = () => {
    setLoggedIn(false)
    setPassword(null)
    setCustomerPassword('')
    setRequest(false)
    setRating({ service: 0, food: 0 })
  }
  const handleCustomerFeedback = () => {
    setFeedback({
      ...feedback, 
      service: {
        ...feedback.service, 
        [rating.service]: feedback.service[rating.service] ? feedback.service[rating.service] + 1 : 1 
      }, 
      food: {
        ...feedback.food, 
        [rating.food]: feedback.food[rating.food] ? feedback.food[rating.food] + 1 : 1
      }
    })

    reset()
    setMessage(true)
    setTimeout(() => setMessage(false), 5000)
  }

  const handleRequest = () => {
    setPassword(Math.random().toString(36).substr(2, 4))
    setRequest(true)
  }

  const handleLogin = (ev) => {
    ev.preventDefault()
    if(customerPassword === password) {
      setLoggedIn(true)
    }
  }

  const handleCancel = () => {
    setPassword(null)
    setRequest(false)
    setCustomerPassword('')
  }

  const handleRatingCancel = () => {
    setLoggedIn(false)
    setCustomerPassword('')
  }

  if(message) 
    return <Notification message='Thank you for your feedback!' />
  return (
    <Stack spacing={3} sx={{ mx: '20px' }}>
      <Request password={password} handleRequest={handleRequest} request={request} />

      { loggedIn 
        ? (
            <Feedback 
              handleRatingCancel={handleRatingCancel}
              handleCustomerFeedback={handleCustomerFeedback}
              rating={rating} 
              setRating={setRating}
            />
          )
        :
          ( password && 
            <Login 
              handleLogin={handleLogin} 
              customerPassword={customerPassword} 
              setCustomerPassword={setCustomerPassword} 
              handleCancel={handleCancel} 
            />
          )
      }
      <Result feedback={feedback}/>
    </Stack>
  );
};

export default Unicafe
