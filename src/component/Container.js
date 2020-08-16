import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FormModal } from './Modal'
import { Todo } from './Todo.js';

export const AppContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modId, setModId] = useState(null)
    const todos = useSelector(state => state.todos)

    return (
        <Container fluid className="mt-3 clearfix">
            <FormModal show={show} modId={modId} handleClose={handleClose} />
            <Row className="no-gutters">
                {todos.length !== 0 ?
                    todos.map(item =>
                        <Todo title={item.title}
                            body={item.body}
                            key={item.id}
                            id={item.id}
                            setModId={setModId}
                            handleShow={handleShow} />)
                    : null}

            </Row>
            {/* <div class="fixed-bottom clearfix"> */}
            <Button style={{ right: 50, bottom: 50 }} className="position-fixed rounded-circle font-weight-bold"
                onClick={handleShow}
                show={show}
                size="lg">
                +
                </Button>
            {/* </div> */}
        </Container>
    )
}