import R from 'ramda'


const addUser = (startParams) => {
  return {
    type: 'ADD_USER',
    users: R.concat(startParams.users, [startParams.inputValue]),
    inputValue: ''
  }
}



export {
  addUser
}