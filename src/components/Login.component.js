
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default class Login extends Component {

        render(){
        return (
          

            <div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
            type="text"
            value={this.state.name}
            onChange={this.onChangeStudentName}
            />
            
            </Form.Group>
            <Form.Group controlId="Name">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
            type="password"
            value={this.state.rollno}
            onChange={this.onChangeStudentRollno}
            />
            </Form.Group>
            <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
            >
            Iniciar Sesion
            </Button>
            </Form>
            </div>

          
        );
        }
    }
   