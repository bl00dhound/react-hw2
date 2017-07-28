import React from 'react'
import {ListGroupItem, Button, Glyphicon} from 'react-bootstrap'

const renderItem = (user) =>
  <ListGroupItem href='#' key={user.id}>{user.name}
    <Button className='delete_btn'
            // onClick={(event) => that.props.deleteUser(user.id)}
            bsStyle='danger'
            bsSize='xsmall'><Glyphicon glyph='remove'/></Button>
  </ListGroupItem>

export {
  renderItem
}