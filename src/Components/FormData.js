import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formdata.css";

const FormData = (formProps) => {
  const { handleChange, handleSubmit, state } = formProps;
  const formContainerStyle = state.show
    ? { height: "100vh", width: "1487px", margin:"20px", display: "flex", flexDirection: "column" }
    : {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-lg-6 offset-lg-3"
          style={formContainerStyle}
        >
          {state.show && (
            <Form className="shadow-lg p-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  name="owner"
                  value={state.owner}
                  placeholder=""
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                  type="text"
                  name="pet"
                  value={state.pet}
                  placeholder=""
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Apt Date </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={state.date}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Apt Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={state.time}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  name="notes"
                  value={state.notes}
                  rows={3}
                  placeholder="Detailed comments about the condition"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center mt-4">
                <Button
                  className="w-100"
                  variant="success"
                  size="sm"
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    width: 'fit-content',
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormData;
