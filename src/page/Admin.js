import React,  {useState} from "react";
import { Button, Container } from "react-bootstrap";

import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateHouse from "../components/modals/CreateHouse";
import { set } from "mobx";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [houseVisible, setHouseVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
     <Button onClick={() => setTypeVisible(true)} className="mt-3" variant="outline-dark">
       Добавить тип дома
     </Button>
     <Button onClick={() => setBrandVisible(true)} className="mt-3" variant="outline-dark">
       Добавить компанию
     </Button>
     <Button onClick={() => setHouseVisible(true)} className="mt-3" variant="outline-dark">
       Добавить дом
     </Button>
     <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
     <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
     <CreateHouse show={houseVisible} onHide={() => setHouseVisible(false)}/>
    </Container>
  )
}

export default Admin;