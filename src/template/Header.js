import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../img/mainLogo.bea5a270.png';
import Modal from 'react-bootstrap/Modal'
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import App2 from '../components/App2';
class Header extends React.Component {
  state={
    
    insertarModal: true,}

    insertarModal=()=>{
      this.setState({insertarModal: !this.state.insertarModal});
    }

    render(){
  return ( 
  <>
  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#home">
      <img  src={Logo} width="180px" alt="User Icon"></img>
     
   </Navbar.Brand>
  </Container>
  <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
         
          <App2/>
        </Form>
       
</Navbar>

 <Modal isOpen={this.state.insertarModal}>
 <ModalHeader style={{display: 'block'}}>
   <span style={{float: 'right'}} onClick={()=>this.insertarModal()}>x</span>
 </ModalHeader>
 <ModalBody>
   <div className="form-group">
     <label htmlFor="id">ID</label>
     <input className="form-control" type="text" name="id" id="id" />
     <br />
     <label htmlFor="nombre">Nombre</label>
     <input className="form-control" type="text" name="nombre" id="nombre" />
     <br />
     <label htmlFor="nombre">País</label>
     <input className="form-control" type="text" name="pais" id="pais" />
     <br />
     <label htmlFor="capital_bursatil">Capital Bursatil</label>
     <input className="form-control" type="text" name="capital_bursatil" id="capital_bursatil" />
   </div>
 </ModalBody>

 <ModalFooter>
   {this.state.tipoModal=='insertar'?
     <button className="btn btn-success" onClick={()=>this.peticionPost()}>
     Insertar
   </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
     Actualizar
   </button>
}
     <button className="btn btn-danger" onClick={()=>this.insertarModal()}>Cancelar</button>
 </ModalFooter>
</Modal>
</>
  )}
    }
    export default Header;