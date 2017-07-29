import { connect } from 'react-redux'
import List from '../components/List'
import { deleteUser } from '../actions/usersActions'


const mapStateToProps = (state) => {
  return ({
    users: state.users
  })
}

const mapDispatchToProps = {
  onDeleteClick: deleteUser
}

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default VisibleList