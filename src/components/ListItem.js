import React from 'react'
import {ListGroupItem, Button, Glyphicon} from 'react-bootstrap'

const renderItem = (user, onDeleteClick) =>
  <ListGroupItem href='#' key={user.id}>{user.name}
    <Button className='delete_btn'
            onClick={() => onDeleteClick(user.id)}
            bsStyle='danger'
            bsSize='xsmall'><Glyphicon glyph='remove'/></Button>
  </ListGroupItem>

export {
  renderItem
}