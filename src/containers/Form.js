import React from 'react'
import {FormGroup, InputGroup, FormControl, Button, Glyphicon} from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import {addUser} from '../actions/usersActions'

let Form = ({dispatch}) => {
  let input
  return(
    <FormGroup className='add_form'>
      <InputGroup>
        <FormControl type='text'
                     componentClass="input"
                     placeholder='enter name'
                     inputRef={(ref) => {input = ref}}
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