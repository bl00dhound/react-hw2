import R from 'ramda'

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

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return R.compose(
                R.merge({
                  users: R.concat(state.users, [{id: action.id, name: action.name}])
                }),
                R.dissoc('users')
            )(state)

    case 'DELETE_USER':
      return R.compose(
                R.merge({
                  users: R.reject(R.propEq('id', action.id), state.users)
                }),
                R.dissoc('users')
            )(state)

    default: {
      return state
    }
  }
}

export default usersReducer
