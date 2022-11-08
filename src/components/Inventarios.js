import React,{useState} from 'react'
import Header from '../template/Header'
import {peticionesapi} from './funcionesapi'
import { MDBCol,MDBContainer,MDBIcon,MDBTableBody,MDBTableHead,MDBRow, MDBTable,MDBTooltip,} from "mdb-react-ui-kit";
import logoinv from "../img/logo inventario.png"
import "./assets/css/Inventarios.css"
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import App2 from './App2';

class Inventarios extends React.Component {
  
state={
  items:[]
  
  
}

insertarModal(id){
console.log(id)
}


componentDidMount(){
  let url = 'https://ops.enerbit.dev/learning/api/v1/meters?page=0&size=50';
  axios.get(url).then(response =>{
    this.setState({
      items: response.data.items
    })
  })
}
 



render(){
  return (
    
    <React.Fragment>
     
   <Header></Header>
  
  
    
  <section 
  className="gradient-custom-2 vh-100">
  
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="10" xl="10">
        
         
          
                <div 
                 className="text-center pt-3 pb-2">
                  <img
                    src={logoinv}
                    alt="Sample"
                    width="100"
                  />
                  <br></br>
                  <h2 className="my-4" color='orange'>Inventario</h2>
                  
                </div >
                <div>
                <MDBTable 
              
                className="text-white mb-0 table-hover">
                  
                  <MDBTableHead >
                  
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Tipo De Conexión</th>
                      <th scope="col">Sistema De Almacenamiento</th>
                      <th scope="col">Condición</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Localización</th>
                      <th scope="col">Fabricante</th>
                      <th scope="col">Comprado</th>
                      <th scope="col">I_Max</th>
                      <th scope="col">I_B</th>
                      <th scope="col">I_N</th>
                      <th scope="col">Seals</th>
                      <th scope="col">ID</th>
                      <th scope="col">Creado En</th>
                      <th scope="col">Actualizado En</th>
                      <th scope="col">Acción</th>
                    </tr>
                  </MDBTableHead>
                  {this.state.items.map((value)=>{
    return(
                  <MDBTableBody
                  className='table table-hover'>
             
                      <tr key={value.id} onClick={()=>this.insertarModal(value.id)} 
                      
                         className="fw-normal"
                         >
                        <th className="ms-2 align-middle"
                        >
                        
                        {value.serial}
                        
                            
                        </th>
                        <th  className="ms-2  align-middle"   >
                        {value.connection_type}
                       
                        </th>
                        
                        <td
                        
                        className="align-middle">
                        {value.storage_system}
                        </td>

                        <td className="align-middle">
                        {value.condition}
                        </td>
                        <td className="align-middle">
                        {value.owner}
                        </td>
                        <td className="align-middle">
                        {value.location}
                        </td>
                        <td className="align-middle">
                        {value.manufacturer}
                        </td>
                        <td className="align-middle">
                        {value.purchase}
                        </td>
                        <td className="align-middle">
                        {value.i_max}
                        </td>
                        <td className="align-middle">
                        {value.i_b}
                        </td>
                        <td className="align-middle">
                        {value.i_n}
                        </td>
                        <td className="align-middle">
                        {value.seals}
                        </td>
                        <td className="align-middle">
                        {value.id}
                        </td>
                        <td className="align-middle">
                        {value.created_at}
                        </td>
                        <td className="align-middle">
                        {value.updated_at}
                        </td>
                        <td className="align-middle">
                            <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Edit"
                            >
                            <MDBIcon
                                fas
                                icon="edit"
                                color="success"
                                size="lg"
                                className="me-3"
                            />
                            </MDBTooltip>
                            <MDBTooltip
                            tag="a"
                            wrapperProps={{ href: "#!" }}
                            title="Remove"
                            >
                            <MDBIcon
                                fas
                                icon="trash-alt"
                                color="warning"
                                size="lg"
                                className="me-3"
                            />
                            
                            </MDBTooltip>
                        </td>
                        
                        </tr>
                       </MDBTableBody>
                     )})}
                    
                  </MDBTable>
                 </div>
            
                </MDBCol>
           </MDBRow>
      </MDBContainer>
    </section>
    
  </React.Fragment>
 
  )            

}
}

export default Inventarios;
