import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

import { question } from "./data";
const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  // to push data to array
  const addnewItem = () => {
    if (qu === "" || an === "") {
      notify("Please Enter data", "Error");
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
  };

  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder=" Enter question"
        />
      </Col>

      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder=" Enter answer"
        />
      </Col>
      <Col sm="2">
        <button
          onClick={addnewItem}
          className="btn-color w-100"
          variant="primary"
          type="submit"
        >
          Submit
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
