import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return <div className="footer">Footer Content</div>;
};

function AddOpen() {
  const [showButtons, setShowButtons] = useState(false);
  const [showCreateButton, setShowCreateButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [addTable, setAddTable] = useState(false);

  const handleCreate = () => {
    setShowButtons(true);
    setShowCreateButton(false);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="full">
      <div className="header1">
        <h1 id="hd1">Action Plan</h1>
      </div>

      <div className="heading">
        <div className="hr1"></div>
        <div className="ll">
          <h1> Form </h1>
        </div>
      </div>

      <div className="fulll">
        <div className="whole">
          <div className="content">
            <label htmlFor="">
              User ID <br /> <input type="text" className="form" />
            </label>

            <label htmlFor="">
              Component <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Source Of Issue <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Date Of Issue <br />{" "}
              <input type="date" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Vendor Name <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>
            <label htmlFor="">
              Risk Rating <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Issue Description <br />{" "}
              <textarea name="" id="" cols="40" rows="6"></textarea>
            </label>

          
            <div className="content">
                <label htmlFor="">User ID: <br /> <input type="text" className='form'/></label>
                
                <label htmlFor="">Component <br /> <input type="text" name="" id="" className='form'/></label>
                
                <label htmlFor="">Source Of Issue <br /> <input type="text" name="" id="" className='form'/></label>
                
                <label htmlFor="">Date Of Issue <br /> <input type="date" name="" id="" className='form'/></label>
                
                <label htmlFor="">Vendor Name <br />        <input type="text" name="" id="" className='form'/>
</label>
                <label htmlFor="">Risk Rating <br /> <input type="text" name="" id="" className='form'/></label>
                
                <label htmlFor="">Issue Description <br /> <textarea name="" id="" cols="40" rows="6"></textarea></label>
                
                <label htmlFor="">Remarks (if Any) <br /><textarea name="" id="" cols="40" rows="6"></textarea></label>
                
                <label htmlFor="">Team Leader Name <br /> <input type="text" name="" id="" className='form'/></label>
               
                <label htmlFor="">Issue Creator <br /> <input type="text" name="" id="" className='form' /></label>
               
                <label htmlFor="">Upload Files <br /> <input type='document' name="" id="" className='form'/></label>
                
                <p>Status</p>
            </div>
            </div> 
            <div className="butt0n">
      {showCreateButton && (
        <Button variant="primary" onClick={handleCreate} id='crt_btn'>Create</Button>
      )}

            <label htmlFor="">
              Remarks (if Any) <br />
              <textarea name="" id="" cols="40" rows="6"></textarea>
            </label>

            <label htmlFor="">
              Team Leader Name <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Issue Creator <br />{" "}
              <input type="text" name="" id="" className="form" />
            </label>

            <label htmlFor="">
              Upload Files <br />{" "}
              <input type="document" name="" id="" className="form" />
            </label>

            <p>Status</p>
          </div>
        </div>
        <div className="butt0n">
          {showCreateButton && (
            <Button variant="primary" onClick={handleCreate} id="crt_btn">
              Create
            </Button>
          )}

          {showButtons && (
            <div className="bts">
              <Button variant="danger">Delete</Button>{" "}
              <Button variant="success">Save</Button>{" "}
              <Button variant="primary" id="pri" onClick={handleShow}>
                +Add Actionable
              </Button>
            </div>
          )}
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Action Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Unit responsible for closure</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>
                  Person responsible for closure(Unit SPOC)
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a name or Email address.."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Unit Manager responsible for closure</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a name or Email address.."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Business Unit Head</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a name or Email address.."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Target Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Check
                  type="checkbox"
                  label="System development required as part of the Actionable"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput7"
              >
                <Form.Label>Upload Files</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              id="savebtn"
              onClick={() => {
                handleClose();
                setAddTable(true);
              }}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Footer />

      {addTable && (
        <div className="table_c">
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Issue ID</th>
                  <th scope="col">Action ID</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Type of Action</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>{" "}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>101</td>
                  <td>Unit A</td>
                  <td>Action Type 1</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>102</td>
                  <td>Unit B</td>
                  <td>Action Type 2</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
            <div className="lb">
              {" "}
              <NavLink to={'/Action'}>
              <button className="sub-button">Submit</button>

              </NavLink>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddOpen;
