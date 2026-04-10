import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import Modal from 'react-bootstrap/esm/Modal';

function Cards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              published april 9 2026
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              launch demo modal
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">karim masad</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              published april 9 2026
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              launch demo modal
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">karim masad</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
             published april 9 2026
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              launch demo modal
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">karim masad </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>modal text</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cards;