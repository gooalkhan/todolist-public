import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, dndTodo } from '../redux/action';
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useDrag, useDrop } from 'react-dnd';

export const Todo = (props) => {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const handleModify = () => {
        props.handleShow();
        props.setModId(props.id)
    }

    const [{ isDragging }, drag] = useDrag({
        item: { type: "TODO", id: props.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: "TODO",
        hover(item, monitor) {
            if (ref === null) {
                return
            }
            const dragId = item.id
            const hoverId = props.id

            if (dragId === hoverId) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragId < hoverId && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragId > hoverId && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(dndTodo(dragId, hoverId))

            //item.id = hoverId
        },
    })
    drag(drop(ref))

    return (
        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="p-1" ref={ref}>
            <Card className={!isDragging ? "visible":"invisible"}>
                <Card.Header className="container-fluid font-weight-bold">
                    <Row>
                        <Col xs={9} className="pt-1">
                            {props.title}
                        </Col>
                        <ButtonGroup size="sm" style={{ "maxHeight": "2rem" }} className="col-xs-3 ml-auto">
                            <Button variant="outline-secondary"
                                className="small font-weight-bold"
                                onClick={handleModify}>
                                수정</Button>
                            <Button variant="secondary"
                                className="font-weight-bold"
                                onClick={() => { dispatch(deleteTodo(props.id)) }}>
                                &times;
                            </Button>
                        </ButtonGroup>
                    </Row>
                </Card.Header>
                <Card.Body>
                    {props.body}
                </Card.Body>
            </Card>
        </Col >)
}

