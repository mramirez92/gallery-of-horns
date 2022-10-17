// * import 

import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

//  *class components
class App extends React.Component{
  render(){
    return(
      <>
      <Header header1= "Horned Beasts" />
      <Main />
      <Footer />
      </>
    )
  };
};

export default App;
