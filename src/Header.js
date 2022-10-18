import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>{this.props.header1}</h1>
      </header>
    )
  }
};

export default Header;