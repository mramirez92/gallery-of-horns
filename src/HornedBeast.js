import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imgHeart:0,
    }
  }
  handleHearts= ()=>{
    this.setState({
      imgHeart: this.state.imgHeart +1
    })
  }
  handleTitle = () => {
    this.props.handleOpenModal(this.props.title)
      
    }
  
    render(){
    return(
      <>

      <Col className= "m-4">

      <Card id = "hbcard" className = "p-2">
      <Card.Img 
      variant="top" 
      src={this.props.imageUrl}
      alt={this.props.description}
      title={this.props.title} 
      onClick={this.props.handleOpenModal}/>
      <Card.Body>
        <Card.Title>
          {this.props.title}
        </Card.Title>

        <Card.Text id="cardText">
          <p id='description'>
            {this.props.description}
          </p>
        </Card.Text>

        <p id='heartEmoji'onClick={this.handleHearts} >Show me some love
        <span>{" 💖"}</span> {this.state.imgHeart}</p>
      </Card.Body>
      </Card>
      </Col>
    </>
    )
  };
};

export default HornedBeast;