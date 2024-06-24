import React, { useContext } from "react";
import { Context } from ".."
import { observer } from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup';



const TypeBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <ListGroup variant="flush">
      {device.types.map(type =>
        <ListGroup.Item
          action variant="light"
          style={{width:120,
            cursor:'pointer',
          }}
          key={type.id}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}

          >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
})

export default TypeBar;