import React from "react";
import { Row, Accordion } from "react-bootstrap";
import { question } from "./data";
const QAlist = ({ data, deleteOneItem }) => {
  // to delete one item
  const ondeleteItem = (Id) => {
    if (data.length >= 1) {
      const index = question.findIndex((item) => item.id === Id);

      question.splice(index, 1);

      deleteOneItem(question);
    }
  };
  return (
    <Row>
      <Accordion>
        {data.length >= 1 ? (
          data.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto"> {item.q} </div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline "> {item.a} </div>
                  <button
                    onClick={() => ondeleteItem(item.id)}
                    className="btn=color"
                  >
                    delete{" "}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> No Questions Now</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAlist;
