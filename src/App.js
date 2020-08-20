import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FormModal } from './component/Modal'
import { Todo } from './component/Todo.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modId, setModId] = useState(null)
    const todos = useSelector(state => state.todos)

    const handleAdd = () => {
        setModId(null);
        handleShow();
    }

    return (
        <Container fluid className="mt-3 clearfix">
            <FormModal show={show} modId={modId} setModId={setModId} handleClose={handleClose} />
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
                onClick={handleAdd}
                show={show}
                size="lg">
                +
                </Button>
            {/* </div> */}
        </Container>
    )
}

const dndApp = (props) => {
    return(
    <DndProvider backend={HTML5Backend}>
        <App/>
    </DndProvider>
    )}

export default dndApp;