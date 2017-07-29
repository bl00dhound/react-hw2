
const addUser = (startParams) => {
  return {
    type: 'ADD_USER',
    name: startParams.inputValue,
    id: Date.now(),
  }
}

const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
}

const filterUsers = (value) => {
  return {
    type: 'FILTER_USERS',
    value
  }
}

const showAll = () => {
  return {
    type: 'SHOW_ALL'
  }
}


export {
  addUser,
  deleteUser,
  filterUsers,
  showAll
}