import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
// import { getDigestValue, getSharePointListItems } from './services/SharePointService';

const Footer = () => {
  return <div className="footer">Footer Content</div>;
};

function AddOpen() {
  const [showButtons, setShowButtons] = useState(false);
  const [showCreateButton, setShowCreateButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [addTable, setAddTable] = useState(false);
  const [ADD_open, setADD_open ] = useState({
    userId: '',
    component: '',
    sourceOfIssue: '',
    dateOfIssue: '',
    vendorName: '',
    riskRating: '',
    issueDescription: '',
    remarks: '',
    teamLeaderName: '',
    issueCreator: '',
    uploadFiles: ''
  });
  const [issues, setIssues] = useState([]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setADD_open({
      ...AddOpen,
      [name]: value
    });
  };

  const handleCreate = () => {
    setShowButtons(true);
    setShowCreateButton(false);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  

  useEffect(() => {
      axios.get('http://localhost:3001/ADD_open')
          .then(response => {
              setADD_open(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the users!', error);
          });
  }, []);

  return (
    <><><div className="full">
      <div className="header1">
        <h1 id="hd1">Action Plan</h1>
      </div>

      <div className="heading">
        <div className="hr1"></div>
        <div className="ll">
          <h1>Form</h1>
        </div>
      </div>

      <div className="fulll">
        <div className="whole">
          <div className="content">

            <label>
              User ID: <br />
              <input
                type="text"
                className='form'
                name="userId"
                value={ADD_open.userId}
                onChange={handleChange} />
            </label>

            <label>
              Component <br />
              <input
                type="text"
                className='form'
                name="component"
                value={ADD_open.component}
                onChange={handleChange} />
            </label>

            <label>
              Source Of Issue <br />
              <input
                type="text"
                className='form'
                name="sourceOfIssue"
                value={ADD_open.sourceOfIssue}
                onChange={handleChange} />
            </label>

            <label>
              Date Of Issue <br />
              <input
                type="date"
                className='form'
                name="dateOfIssue"
                value={ADD_open.dateOfIssue}
                onChange={handleChange} />
            </label>

            <label>
              Vendor Name <br />
              <input
                type="text"
                className='form'
                name="vendorName"
                value={ADD_open.vendorName}
                onChange={handleChange} />
            </label>

            <label>
              Risk Rating <br />
              <input
                type="text"
                className='form'
                name="riskRating"
                value={ADD_open.riskRating}
                onChange={handleChange} />
            </label>

            <label>
              Issue Description <br />
              <textarea
                name="issueDescription"
                cols="40"
                rows="6"
                value={ADD_open.issueDescription}
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Remarks (if Any) <br />
              <textarea
                name="remarks"
                cols="40"
                rows="6"
                value={ADD_open.remarks}
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Team Leader Name <br />
              <input
                type="text"
                className='form'
                name="teamLeaderName"
                value={ADD_open.teamLeaderName}
                onChange={handleChange} />
            </label>

            <label>
              Issue Creator <br />
              <input
                type="text"
                className='form'
                name="issueCreator"
                value={ADD_open.issueCreator}
                onChange={handleChange} />
            </label>

            <label>
              Upload Files <br />
              <input
                type="file"
                className='form'
                name="uploadFiles"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setADD_open({
                    ...ADD_open,
                    uploadFiles: file
                  });
                } } />
            </label>
          </div>


          <div className="content">
            <label>
              User ID: <br />
              <input
                type="text"
                className='form'
                name="userId"
                value={ADD_open.userId}
                onChange={handleChange} />
            </label>

            <label>
              Component <br />
              <input
                type="text"
                className='form'
                name="component"
                value={ADD_open.component}
                onChange={handleChange} />
            </label>

            <label>
              Source Of Issue <br />
              <input
                type="text"
                className='form'
                name="sourceOfIssue"
                value={ADD_open.sourceOfIssue}
                onChange={handleChange} />
            </label>

            <label>
              Date Of Issue <br />
              <input
                type="date"
                className='form'
                name="dateOfIssue"
                value={ADD_open.dateOfIssue}
                onChange={handleChange} />
            </label>

            <label>
              Vendor Name <br />
              <input
                type="text"
                className='form'
                name="vendorName"
                value={ADD_open.vendorName}
                onChange={handleChange} />
            </label>

            <label>
              Risk Rating <br />
              <input
                type="text"
                className='form'
                name="riskRating"
                value={ADD_open.riskRating}
                onChange={handleChange} />
            </label>

            <label>
              Issue Description <br />
              <textarea
                name="issueDescription"
                cols="40"
                rows="6"
                value={ADD_open.issueDescription}
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Remarks (if Any) <br />
              <textarea
                name="remarks"
                cols="40"
                rows="6"
                value={ADD_open.remarks}
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Team Leader Name <br />
              <input
                type="text"
                className='form'
                name="teamLeaderName"
                value={ADD_open.teamLeaderName}
                onChange={handleChange} />
            </label>

            <label>
              Issue Creator <br />
              <input
                type="text"
                className='form'
                name="issueCreator"
                value={ADD_open.issueCreator}
                onChange={handleChange} />
            </label>

            <label>
              Upload Files <br />
              <input
                type="file"
                className='form'
                name="uploadFiles"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setADD_open({
                    ...ADD_open,
                    uploadFiles: file
                  });
                } } />
            </label>
            <p>Status</p>
          </div>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unit responsible for closure</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Person responsible for closure(Unit SPOC)</Form.Label>
              <Form.Control type="text" placeholder="Enter a name or Email address.." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Unit Manager responsible for closure</Form.Label>
              <Form.Control type="text" placeholder="Enter a name or Email address.." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Business Unit Head</Form.Label>
              <Form.Control type="text" placeholder="Enter a name or Email address.." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Target Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Check type="checkbox" label="System development required as part of the Actionable" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Upload Files</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" id="savebtn" onClick={() => {
            handleClose();
            setAddTable(true);
          } }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div><Footer /></><div> {addTable && (
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
              {issues.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.issueId}</td>
                  <td>{issue.actionId}</td>
                  <td>{issue.unit}</td>
                  <td>{issue.typeOfAction}</td>
                  <td>{issue.status}</td>
                </tr>
              ))}
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
      </div></>
  );
}

export default AddOpen;
