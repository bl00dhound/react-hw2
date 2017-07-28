import React from 'react'
import R from 'ramda'
import {ListGroup} from 'react-bootstrap'
import {renderItem} from './ListItem'

// import PropTypes from 'prop-types'

const List = ({ users }) => (
    <ListGroup className='list'>{R.map(renderItem)(users)}</ListGroup>

)

export default List