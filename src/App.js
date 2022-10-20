// * import 

import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeasts from './SelectedBeasts.js';
import data from './data.json';

//  *class components
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      selectedBeast:{},

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


  render(){
    return(
      <>
      <Header/>
      <SelectedBeasts
      show = {this.state.showModal}
      onHide = {this.handleCloseModal}
      selectedBeast ={this.state.selectedBeast}/>
      <Main 
      handleOpenModal ={this.handleOpenModal}
      data={data}
      />
      <Footer />
      </>
    )
  };
};

export default App;
