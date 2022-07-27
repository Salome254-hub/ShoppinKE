import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaCartArrowDown} from 'react-icons/fa'

function Header() {
  return (
    <Navbar bg="light" variant="light" style={{height:100}}>
        <Container>
            <Navbar.Brand>
                <a href="/">ShoppinKE</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:700}} placeholder="Search a product"
                className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='Success'>
                        *<FaCartArrowDown color="black" fontsize="25px" />
                        <Badge>{20}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minwidth:370}}>
                        <span style={{padding:10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}
export default Header