import React from "react";
import Form from 'react-bootstrap/Form';
import './FormDropdown.css'


class FormDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      selectedHorns:"",
    }
  }
  
handleSubmit =(event,horns) =>{
  event.preventDefault();
  let selected = event.target.selected.value;
  
  this.setState({
  selectedVal :selected
  })
  }
render(){
  return(
    <>
    <Form class = "form" onSubmit= {this.handleSubmit}>
    <Form.Group>
      <Form.Label>View beasts by the number of horns:</Form.Label>
      <Form.Select name="selected" id="" onChange={this.props.onChange}>
        <option>--</option>
        <option value= "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
        <option value ="100">100</option>
      </Form.Select>
    </Form.Group>
    
    </Form>
    </>
  )
  };
}

export default FormDropdown;