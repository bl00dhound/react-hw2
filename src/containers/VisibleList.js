import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => {
  return ({
    users: state.users
  })
}

// const mapDispatchToProps = {
//   onTodoClick: toggleTodo
// }

const VisibleList = connect(
  mapStateToProps
)(List)

export default VisibleList