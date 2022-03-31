export const total = (feedback) => {
  const result = Object.keys(feedback).reduce((acc, key) => {
    let subtotal = Object.values(feedback[key]).reduce((subAcc, value) => {
      return subAcc + value
    }) 
    return subtotal + acc
  }, 0)
  return result 
}

export const average = (feedback) => {
  let result = Object.keys(feedback).reduce((acc, key) => {
    let subresult = Object.keys(feedback[key]).reduce((subacc, k) => {
      if(Number(k) < 2.5) {
        return subacc + (feedback[key][k] * -1)
      } else if(Number(k) > 2.5) {
        return subacc + (feedback[key][k] * 1)
      } else {
        return subacc + (feedback[key][k] * 0)
      }
    }, 0)
    return subresult + acc
  }, 0)
  return result / total(feedback)
}

export const positive = (feedback) => {
  let result = Object.keys(feedback).reduce((acc, key) => {
    let subresult = Object.keys(feedback[key]).reduce((subacc, k) => {
      if(Number(k) > 2.5) {
        return subacc + feedback[key][k]
      } else {
        return subacc
      }
    }, 0)
    return subresult + acc
  }, 0)
  return (result / total(feedback)) * 100
}

export const feedbackExists = (feedback) => {
  let feedbackCount = Object.keys(feedback.service).length + Object.keys(feedback.food).length
  if(feedbackCount === 0) {
    return false
  } else{
    return true
  }
}
