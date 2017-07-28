import R from 'ramda'


const addUser = (startParams) => {
  return {
    type: 'ADD_USER',
    name: startParams.inputValue,
    id: Date.now()
  }
}



export {
  addUser
}