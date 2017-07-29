import React from 'react'
import R from 'ramda'
import { ListGroup } from 'react-bootstrap'
import { renderItem } from './ListItem'


const List = ({ users, onDeleteClick }) => {
  const filteredUsers = R.filter(R.prop('visible'))(users)
  return (
    <ListGroup className='list'>{R.map( user => renderItem(user, onDeleteClick))(filteredUsers)}</ListGroup>
  )
}

export default List