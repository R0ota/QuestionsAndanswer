import { Col, Row, Container } from "react-bootstrap";
import FormInput from "./components/forminput";
import QAlist from "./components/QAlist";
import { question } from "./components/data";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setdata] = useState(question);
  //  to add new item
  const addItem = () => {
    setdata([...question]);
    notify("Added successfully", "sucess");
  };

  //  to delete all data

  const deleteAllItems = () => {
    question.splice(0, question.length);
    setdata([]);
    notify("All deleted successfully", "sucess");
  };

  const deleteOneItem = (items) => {
    setdata([...items]);
    notify("The question has been successfully delete ", "sucess");
  };

  // to push notifications

  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "sucess") toast.success(message);
  };

  return (
    <div className="font text-center color-body text-align-center ">
      <Container className="p-5  ">
        <Row className="justify-content-center  ">
          <Col sm="4">
            <div className="fs-3 text-center py-2 ">
              {" "}
              Common Questions and Answers
            </div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QAlist data={data} deleteOneItem={deleteOneItem} />

            {data.length >= 1 ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-3">
                {" "}
                Delete All{" "}
              </button>
            ) : null}
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
