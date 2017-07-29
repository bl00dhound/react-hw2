import R from 'ramda'

const changeUsers = (users, state) =>
  R.compose(
      R.merge(users),
      R.dissoc('users')
  )(state)

export {
  changeUsers
}