import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imgClick:0,
    }
  }
  handleClick = ()=>{
    this.setState({
      imgClick: this.state.imgClick +1
    })
  }
    render(){
    return(
      <>
      {/* grid */}
      <Col className= "m-4">

      {/* <Col sm= {3} xs={2} md={4} lg={6}> */}
      <Card id = "hbcard" className = "p-2">
      <Card.Img variant="top" src={this.props.imageUrl}alt={this.props.description}title={this.props.title} onClick={this.handleClick} />
      <Card.Body>
        <Card.Title>{this.props.title}
        </Card.Title>
        <Card.Text id="cardText"><p id='description'>{this.props.description}</p></Card.Text>
        <p id='clickMePar'>CLICK MY PICTURE IF I'M YOUR FAVORITE</p>
        <p id='heartEmoji'>💖{this.state.imgClick}</p>
      </Card.Body>
      </Card>
      </Col>
      
      {/* <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl}alt={this.props.description}title={this.props.title} onClick={this.handleClick} />
        <p>{this.props.description}</p>
        <p>CLICK MY PICTURE IF I'M YOUR FAVORITE</p>
        <p>💖{this.state.imgClick}</p>
           </article> */}
    </>
    )
  };
};

export default HornedBeast;