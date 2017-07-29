import React from 'react'
import { FormGroup, InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import { addUser, filterUsers, showAll } from '../actions/usersActions'

let Form = ({dispatch}) => {
  let input
  return(
    <FormGroup className='add_form'>
      <InputGroup>
        <FormControl type='text'
                     componentClass="input"
                     placeholder='enter name'
                     onChange={(event) => {
                       input = event.target
                       dispatch(filterUsers({
                         inputValue: input.value
                       }))
                     }}
                     />
        <InputGroup.Button>
          <Button bsStyle='success'
                  onClick={ () => {
                    if (!input.value.trim()) return
                    dispatch(addUser({
                      inputValue: input.value,
                      id: Date.now()
                    }))
                    input.value = ''
                    dispatch(showAll())
                  }}>
              <Glyphicon glyph='plus'/>
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  )
}

Form = connect()(Form)

export default Form