import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addTodo, modifyTodo } from '../redux/action'

export const FormModal = (props) => {
    const [todo, keyStroke] = useState({ title: '', body: '' })
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        if (props.modId) {
            const modTodo = todos.filter((item) => item.id === props.modId)  
            keyStroke(...modTodo)
        }        
        return () => {
        }
    }, [props.modId, todos])

    const saveHandler = (todo) => {
        if(props.modId) {
            dispatch(modifyTodo(props.modId, {...todo}))
        } else {
            dispatch(addTodo({...todo}))
        }
        props.handleClose();
        keyStroke({title:'', body:''})
    }

    const closeHandler = () => {
        props.handleClose();
        keyStroke({title:'', body:''})
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>할 일 입력</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>제목</Form.Label>
                        <Form.Control
                            placeholder="제목을 입력하세요"
                            onChange={e => { keyStroke({ ...todo, title: e.target.value }) }}
                            value={todo.title} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>할 일</Form.Label>
                        <Form.Control
                            placeholder="할 일을 입력하세요"
                            onChange={e => { keyStroke({ ...todo, body: e.target.value }) }}
                            value={todo.body} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={closeHandler}>
                    닫기
            </Button>
                <Button variant="primary"
                    onClick={() => { saveHandler(todo) }}>
                    저장
            </Button>
            </Modal.Footer>
        </Modal>
    );
}