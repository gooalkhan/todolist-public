import React from 'react';
import { Card, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

export const Todo = (props) => {
    return (
        <Col xl={4} lg={6} md={6} sm={12} xs={12} className="p-1">
            <Card>
                <Card.Header className="container-fluid font-weight-bold">
                    <Row>
                        <Col xs={9} className="pt-1">
                            {props.title}
                        </Col>
                        <ButtonGroup size="sm" style={{ "maxHeight": "2rem" }} className="col-xs-3 ml-auto pr-3">
                            <Button variant="outline-secondary" className="small font-weight-bold">수정</Button>
                            <Button variant="secondary" className="font-weight-bold">&times;</Button>
                        </ButtonGroup>
                    </Row>
                </Card.Header>
                <Card.Body>
                    {props.body}
                </Card.Body>
            </Card>
        </Col >)
}

