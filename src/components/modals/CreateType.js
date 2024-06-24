import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createType } from "../../http/deviceApi";

const CreateType = ({ show, onHide }) => {
  const[value, setValue] = useState("");

  const addType = () => {
    createType({name:value}).then((data) => {
      setValue(' ');
      onHide()
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить новый тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Введите новый тип дома"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
