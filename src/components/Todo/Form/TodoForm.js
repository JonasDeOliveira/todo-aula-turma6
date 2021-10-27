import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import './TodoForm.css'

function TodoForm(props) {

    const [description, setDescription] = useState('')

    const deleteText = (event) => {
        if (event.key == 'Escape') {
            setDescription('')
        }
    }

    const submit = (event) => {
        event.preventDefault()
        props.funcRegister(description)
        setDescription('')
    }

    return(
        <Container>
            <Form onSubmit={submit}>
                <Row className="row-form mb-5">
                    <Col>
                        <Form.Group>
                            <Form.Label>Tarefa</Form.Label>
                            <Form.Control type="text" 
                                placeholder="Digite a tarefa"
                                onChange={(event) => {setDescription(event.target.value)}}
                                value={description}
                                onKeyUp={(event) => {deleteText(event)}}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button onClick={(event) => submit(event)} className="btn btn-submit" variant="primary">
                            Cadastrar
                        </Button> 
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default TodoForm