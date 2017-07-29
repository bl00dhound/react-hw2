import React from 'react'
import R from 'ramda'
import { ListGroup } from 'react-bootstrap'
import { renderItem } from './ListItem'


const List = ({ users, onDeleteClick }) => (
    <ListGroup className='list'>{R.map( user => renderItem(user, onDeleteClick))(users)}</ListGroup>
)

export default List