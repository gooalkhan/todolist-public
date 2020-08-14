import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const FormModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>할 일 입력</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>제목</Form.Label>
                        <Form.Control placeholder="제목을 입력하세요" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>할 일</Form.Label>
                        <Form.Control placeholder="할 일을 입력하세요" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    닫기
            </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    저장
            </Button>
            </Modal.Footer>
        </Modal>
    );
}