import R from 'ramda'
import { changeUsers } from '../utils/utilsFunctions'

const initState = {
  users: [
    {
      id: 1,
      name: 'John',
      visible: true
    },
    {
      id: 2,
      name: 'Jane',
      visible: true
    },
    {
      id: 3,
      name: 'Victor',
      visible: true
    }
  ],
  inputValue: ''
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return changeUsers({
        users: R.concat(state.users, [{id: action.id, name: action.name, visible: true}])
      }, state)

    case 'DELETE_USER':
      return changeUsers({
        users: R.reject(R.propEq('id', action.id), state.users)
      }, state)

    case 'FILTER_USERS':
      return changeUsers({
        users: R.map( user => {
                        user.visible = R.test(new RegExp(action.value.inputValue, 'i'), user.name);
                        return user
                      }, state.users)
      }, state)

    case 'SHOW_ALL':
      return changeUsers({
        users: R.map(user => {
                        user.visible = true
                        return user
                      }, state.users)
      }, state)

    default: {
      return state
    }
  }
}

export default usersReducer
