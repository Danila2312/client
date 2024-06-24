import React, { useContext } from "react";
import { Context } from ".."
import { observer } from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Form, Row, Col, Card } from "react-bootstrap";



const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <Row className="d-flex">
      {device.brands.map(brand => 
        <Card 
          style={{width:230, cursor:'pointer'}}
          key={brand.id}
          className="p-3 m-1"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
        >
         {brand.name} 
        </Card>

      )}

    </Row>
  )
})

export default BrandBar;