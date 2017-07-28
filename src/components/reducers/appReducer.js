const initState = {
  users: [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Victor',
    }
  ],
  inputValue: ''
}

export default function usersReducer(state = initState, action) {
  switch (action.type) {

    default: {
      return state
    }
  }
}
