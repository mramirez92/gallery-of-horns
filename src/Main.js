import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css'

class Main extends React.Component {
  render(){
    // *render fires as soon as page gets mounted
    let beasts = this.props.data.map((animal,index) => {
        return <HornedBeast
        title={animal.title}
        imageUrl={animal.image_url}
        description= {animal.description}
        // key is a unique identifier for each child, helps react keep track of elements in a list. used for whatever your mapping, using foreach
        key={index}
        // because add hearts props can acccs prop beause it lives in app
        // addHearts = {this.props.addHearts}
        handleOpenModal = {()=>this.props.handleOpenModal(animal)}
        />
      
      
    });

    // anything under return is unreachable code
    return (
      <>
      
      <main>
        <Container>
          <Row xs={1} sm ={2}md={4} lg={5}>
        {beasts}
        </Row>
        </Container>
      </main>
      </>
    )
  }
}

export default Main;