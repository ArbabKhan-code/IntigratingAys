import React, {Component} from 'react'
import './ModalElements.css';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Confirm from './LoginConirmationComponent';

import { Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, Navlink , NavItem, NavBtn, NavBtnLink } from './HeaderComponentElements';
class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen : true,
            loginInfo: null,
            userName: null,
            passWord: null,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        this.setState({
            userName: this.username.value,
            passWord: this.password.value
        });
        event.preventDefault();
       
    }

    render(){

        

        return(
            <>
        <Nav >
        <NavbarContainer>
          <NavLogo to='/' >AYS | At Your Service</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <Navlink to='/signup_worker'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Register as Employee</Navlink>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <Navlink to='/signup_client'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Sign Up</Navlink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={this.toggleModal}>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                   
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-success"> Login </Button>
                        </Form>
                    </ModalBody>
                                  
                  </Modal>
                <Confirm client = {this.props.clients.filter((client) => this.state.userName === client.naam && this.state.passWord === client.pwd)[0]} />
            </>
        )
    }
}

export default Header;