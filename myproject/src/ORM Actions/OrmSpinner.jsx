import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap'; // Assuming you're using react-bootstrap

function App() {
  const [showSpinner, setShowSpinner] = useState(false);

  const toggleDisplay = () => {
    // Show spinner
    setShowSpinner(true);

    // Simulate an asynchronous operation (e.g., fetching data, processing)
    // Here, setTimeout is used as an example to simulate a delay
    setTimeout(() => {
      // Hide spinner after 2 seconds (replace with actual asynchronous operation)
      setShowSpinner(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={toggleDisplay}>
        Add
      </Button>

      {showSpinner && (
        <div className="spinner-container">
          <Spinner animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      
      {/* Your other components/content here */}
    </div>
  );
}

export default App;
