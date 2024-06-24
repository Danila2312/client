import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from ".."
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom"


const NavBar = observer( () => {
  const {user} = useContext(Context)
  
  const navigate = useNavigate()
  
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  console.log(user.role)

  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink style={{color:'black'}} to={SHOP_ROUTE}>Forest & Haven</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant="outline-dark" onClick={() => navigate(ADMIN_ROUTE)}>Админ</Button>
            <Button variant="outline-dark" onClick={() => logOut()}>Выйти</Button>
          </Nav>
            :
          <Nav className="ml-auto">
            <Button variant="outline-dark" onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
  )
})

export default NavBar