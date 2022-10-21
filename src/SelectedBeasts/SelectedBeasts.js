
import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './SelectedBeasts.css';

class SelectedBeasts extends React.Component {
      render() {
            return (
                  <>
                        <Modal
                              show={this.props.show}
                              onHide={this.props.onHide}>
                              <Modal.Header closeButton>
                                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                    <Card.Img class ="sbCard"
                                          src={this.props.selectedBeast.image_url}>
                                    </Card.Img>
                                    <p>{this.props.selectedBeast.description}</p>
                              </Modal.Body>
                              <Modal.Footer>
                                    
                              </Modal.Footer>
                        </Modal>
                  </>
            )
      };
};

export default SelectedBeasts;