import React, { Children } from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const Modasl = ({children}) => {




  return (
   <>
   <div>
   <Modal >
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                  
                  </div>
                </ModalBody>

                <ModalFooter>
                  
                    <button className="btn btn-success" >
                    Insertar
                  </button>
                   <button className="btn btn-primary" >
                    Actualizar
                  </button>
  
                    <button className="btn btn-danger">Cancelar</button>
                </ModalFooter>
                {children}
          </Modal>


          <Modal>
            <ModalBody>
             
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" >Sí</button>
              <button className="btn btn-secundary" >No</button>
            </ModalFooter>
          
          </Modal>


   </div>
   
   </>
  )
}

export default Modasl

