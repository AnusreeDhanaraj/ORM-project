import React, {  useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Badge from "react-bootstrap/Badge";

function ActionPage() {
  
  const [showPotion, setShowPotion] = useState(true);
  const [display, setDisplay] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);

  const toggleDisplay = () => {
    setShowPotion(!showPotion);
    setDisplay(!display); 
  };
  // const togglePotion = () => {
  //   setShowPotion(false);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  const showAlert = () => {
    const message = 'Custom alert message here!';
    window.alert(message);}

  const [showUpdateHistory, setShowUpdateHistory] = useState(false);
  const [showRequestClosureModal, setShowRequestClosureModal] = useState(false);
  const [showAddInterimUpdateModal, setShowAddInterimUpdateModal] =
    useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleUpdateHistoryClick = () => {
    setShowUpdateHistory(!showUpdateHistory);
  }
  return (
    <div className="main_div">
      <div className="header"><h1 id="hd">Action Plan</h1></div>
      <div className="action_plan">
        <div className="vr_line"></div>
        <div>Action Plan</div>
      </div>

      <div className="main_Details_div">
        <div className="Details">
          <div className="U_Res">
            <h6>Unit Responsible For Closure</h6>
            <p>Compliance</p>
          </div>

          <div className="U_Man">
            <h6>Unit Manager responsible for closure</h6>
            <p>Manju Antony </p>
          </div>

          <div className="Buss_unit">
            <h6>Business unit Head</h6>
            <p>haris</p>
          </div>

          <div className="Int_Target">
            <h6>Initial Target Date</h6>
            <p>22-4-2022</p>
          </div>

          <div className="Rev_Target">
            <h6>Revised Target Date</h6>
            <p>2024-01-31</p>
          </div>

          <div className="Extentions">
            <h6>No of extentions</h6>
            <p>1</p>
          </div>

          <div className="Extentions">
            <h6>System Development</h6>
            <p>no</p>
          </div>
        </div>

        <div className="Links">
          <Tabs 
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Issue Description">
              <div>
                <h6 id="dis">
                  Issue Description: <Badge bg="secondary"></Badge>
                </h6>
                <FloatingLabel controlId="floatingTextarea2" label="test">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </div>
            </Tab>

            <Tab eventKey="profile" title=" Action Description">
              <div>
                <h6 id="dis">
                  Action Description: <Badge bg="secondary"></Badge>
                </h6>
                <FloatingLabel controlId="floatingTextarea2" label="test2">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </div>
            </Tab>

            <Tab eventKey="contact" title="Approved Interim Updates">
              <Table responsive="sm" id="s">
                <thead className="table">
                  <tr>
                    <th
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                      }}
                      tabIndex="0"
                    >
                      Interim Update
                    </th>
                    <th
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                      }}
                      tabIndex="0"
                    >
                      Remark Comments
                    </th>
                    <th
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                      }}
                      tabIndex="0"
                    >
                      Approved on
                    </th>
                  </tr>
                </thead>
              </Table>
            </Tab>

            <Tab eventKey="attach" title=" Attachment History">
              <Table responsive="sm" id="s">
                <thead className="table">
                  <tr>
                    <th
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Attachment
                    </th>
                    <th
                      style={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                      }}
                    >
                      Update type
                    </th>
                  </tr>
                </thead>
              </Table>
            </Tab>
          </Tabs>
         
      
          {!display && !showPotion && (
            <div>
              <div >
                <div className="interim">
                <h6>Interin Update</h6>
                <p>Update for Interim</p>
                </div>
            <div className="Action">
            <h6>Acion Status</h6>
                <p>issue creater</p>
            </div>

             
              </div>
  <div className="inp">
    <p>Remark</p>
    <input type="text" id="remark" placeholder="Remark"/>
    
    <button id="Approve_btn" onClick={showAlert}>
      Approve
      
      </button>
            <button id="Reject_btn">Reject</button>
  </div></div>
)}



         {
          showPotion && (
<div>
<div className="Act_op">
            <h6>Action Status</h6>
            <p>Open</p>

          </div>
         
          <div className="btn__z"> 
            <Button id="bz"
              variant="primary"
              onClick={() => setShowRequestClosureModal(true)}
            >
              Request for Closure
            </Button>

            <Button variant="dark" id="bz" onClick={() => setLgShow(true)}>
              Extensiontion of target date
            </Button>

            <Button id="bz"
              onClick={() => setShowAddInterimUpdateModal(true)}
              variant="danger"
            >
              Add Interim Update
            </Button>
          </div>
         
          <Modal
            show={showRequestClosureModal}
            onHide={() => setShowRequestClosureModal(false)}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Request for Closure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
  <Button
    variant="secondary"
    onClick={() => setShowRequestClosureModal(false)}
  >
    Close
  </Button>
  <Button variant="primary" onClick={() => {  toggleDisplay() }}>
    Add
  
  </Button>
</Modal.Footer>

          </Modal>
         
          <Modal
            show={showAddInterimUpdateModal}
            onHide={() => setShowAddInterimUpdateModal(false)}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Interim Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowAddInterimUpdateModal(false)}
              >
                Close
              </Button>
              <Button
                variant="primary"
               
                onClick={() => {  toggleDisplay() }}
              >
                submit
              </Button>
            </Modal.Footer>
          </Modal>
        
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Extension of target date
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicNumber">
                  <Form.Label>Target Date</Form.Label>
                  <Form.Control type="number" placeholder="Enter number" />
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                  <Form.Label>Request New Target Date *</Form.Label>
                  <Form.Control type="date" placeholder="Enter date" />
                </Form.Group>
                <Form.Group controlId="formBasicFile">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formBasicTextArea">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setLgShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {  toggleDisplay() }}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          
          </div>
           
 )
} 

          <div className="U_link">
            <h2>
              <a href="#" onClick={handleUpdateHistoryClick}>
                Update History
              </a>
            </h2>
          </div>{" "}
          <br />
          {showUpdateHistory && (
            <div className="lasttable">
              <Card body>
                <Table responsive="sm" id="s">
                  <thead className="table">
                    <tr>
                      <th>Update</th>
                      <th>Update type</th>
                      <th>Status</th>
                      <th>Remark/Comment</th>
                      <th>Updated on</th>
                      <th>Updated by</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-2-12</td>
                      <td>Date change</td>
                      <td>Request</td>
                      <td>ok</td>
                      <td>2024-4-8</td>
                      <td>Aneeta</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          )}
        </div>
      </div>
      <div className="footer"><h6 id="ft">copyright@2024</h6></div>
    </div>
  );
}

export default ActionPage;