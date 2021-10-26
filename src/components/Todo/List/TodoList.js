import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

import './TodoList.css'

function TodoList(props) {

    const renderTasks = () => {
        return (
            <ListGroup.Item>
                <Row className="itemTask">
                    <Col xs={6} md={8}>
                        Nome Tarefa
                    </Col>
                    <Col xs={6} md={4} className="btn-item">
                        <Button variant="info">Concluir</Button>
                        <Button className="mx-3" variant="danger">Deletar</Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {renderTasks()}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoList