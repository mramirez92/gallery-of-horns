// * import 

import React from 'react';
import Header from './Header/Header.js';
import FormDropdown from './FormDropdown/FormDropdown.js';
import Form from 'react-bootstrap/Form';
import Footer from './Footer.js';
import Main from './Main/Main.js';
import SelectedBeasts from './SelectedBeasts/SelectedBeasts.js';
import data from './data.json';

//  *class components
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      selectedBeast:{},
      sortedData: data,

    }
  }


handleCloseModal =() => {
  this.setState({
    showModal:false
  })
}

handleOpenModal =(beast) => {
  this.setState({
    showModal:true,
    selectedBeast: beast,
  })
}

handleSelect =(event) => {
  let selected=event.target.value;
  if (selected === '1'){
    let newData =data.filter(animal => animal.horns === 1)
    this.setState({
      sortedData: newData
    });
}else if (selected === '2'){
  let newData =data.filter(animal => animal.horns === 2)
    this.setState({
      sortedData: newData
    });

}else if (selected === '3'){
  let newData =data.filter(animal => animal.horns === 3)
    this.setState({
      sortedData: newData
    });

}else if (selected === '100'){
  let newData =data.filter(animal => animal.horns === 100)
    this.setState({
      sortedData: newData
    });

}else if(selected === '--'){

}
};

  render(){
    return(
      <>
      <Header/>
      <FormDropdown
      onChange ={this.handleSelect}/>   
      <SelectedBeasts
      show = {this.state.showModal}
      onHide = {this.handleCloseModal}
      selectedBeast ={this.state.selectedBeast}/>
      <Main 
      handleOpenModal ={this.handleOpenModal}
      sortedData={this.state.sortedData}

      />
      <Footer />
      </>
    )
  };
};

export default App;
