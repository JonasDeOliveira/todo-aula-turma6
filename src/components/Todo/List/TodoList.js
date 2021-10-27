import React from 'react'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

import './TodoList.css'

function TodoList(props) {

    const tasks = props.tasksProp

    const taskDone = (task) => {
        return (
            <Button variant={task.done ? 'success' : 'info'} 
                onClick={()=> { task.done ? props.pendingTaskProp(task): props.doneTaskProp(task)}}>
                    Concluir
            </Button>
        )
    }

    const renderTasks = () => {
        return tasks.map(item => {
            return (
                <ListGroup.Item key={item.id}>
                    <Row className="itemTask">
                        <Col xs={6} md={8} className={item.done ? 'doneTask' : ''}>
                            {item.description}
                        </Col>
                        <Col xs={6} md={4} className="btn-item">
                            {taskDone(item)}
                            <Button className="mx-3" variant="danger"
                                onClick={() => props.deleteProp(item.id)}>
                                Deletar
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            )
        })
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