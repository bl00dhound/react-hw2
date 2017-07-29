
const addUser = (startParams) => {
  return {
    type: 'ADD_USER',
    name: startParams.inputValue,
    id: Date.now()
  }
}

const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
}


export {
  addUser,
  deleteUser
}