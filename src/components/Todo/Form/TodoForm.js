import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import './TodoForm.css'

function TodoForm(props) {

    return(
        <Container>
            <Form>
                <Row className="row-form mb-5">
                    <Col>
                        <Form.Group>
                            <Form.Label>Tarefa</Form.Label>
                            <Form.Control type="text" 
                                placeholder="Digite a tarefa" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button className="btn btn-submit" variant="primary">
                            Cadastrar
                        </Button> 
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default TodoForm