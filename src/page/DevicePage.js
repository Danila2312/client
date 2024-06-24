import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Card, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CiStar } from "react-icons/ci";
import {useParams} from "react-router-dom"
import { fetchOneDevice } from "../http/deviceApi";
const DevicePage = () => {
  const [device, setDevice] = useState({info:[]})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  
  return (
    <Container className="d-flex flex-column">
      
      <Row className="mt-5">
        <Col md={4}>
          <Image width={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>

        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            {/* <p>{device.info.description}</p> */}
          </Row>
        </Col>

        <Col сдфы md={4}>
          <Card
            className="d-flex align-items-center justify-content-around"
            style={{width:300, height:170, fontSize: 32,}}
          >
            <h3>от {device.price} руб\сут</h3>
            <div className="d-flex align-items-center justify-content-center">
              Рейтинг: 
              {device.rating}
              <CiStar />
            </div>
            <Button variant="outline-dark">Забронировать</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        {device.info.map(info =>
          <Row key={info.id}>
            <h3>{info.title}</h3>
            <br/>
            <p>{info.description}</p>
          </Row>
        )}
      </Row>

    </Container>
  );
};

export default DevicePage;
