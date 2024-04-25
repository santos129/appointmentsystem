import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaTrashAlt } from "react-icons/fa";

const Lists = (props) => {
  return (
    <Row key={props.id} className="border my-3 p-3 w-75 mx-auto text-center">
      <Col xs={6} md={4} lg={2} className="d-flex justify-content-center align-self-center">
        {props.ownerName &&  
          <Button variant="danger" title="Cancel" style={{ padding: "0.1rem 0.2rem 0.2rem" }} size="sm" onClick={() => props.deleteList(props.id)}>
            <FaTrashAlt />
          </Button>
        }
      </Col>
      <Col className='text-start' xs={6} md={4} lg={5}>
        <h6><em>Owner: </em>{props.ownerName}</h6>
        <p><em>Pet: </em>{props.petName}</p>
        <p style={{ fontSize: "0.8rem" }}>{props.notes && (<em>Note: </em>)}{props.notes}</p>
      </Col>
      <Col xs={6} md={4} lg={5} className="rounded-2 p-2 d-flex flex-column justify-content-center">
        <h4>{props.date}</h4>
        <h5>{props.time}</h5>
      </Col>
    </Row>
  );
}

export default Lists;
