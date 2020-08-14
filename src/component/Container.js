import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import {FormModal} from './Modal'

export const AppContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="mt-3 clearfix">
            <FormModal show={show} handleClose={handleClose} />
            <Row className="no-gutters">
                {props.children}
            </Row>
            {/* <div class="fixed-bottom clearfix"> */}
                <Button style={{right:50, bottom:50}} className="position-fixed rounded-circle font-weight-bold" 
                        onClick={handleShow}
                        show={show}                       
                        size="lg">
                    +
                </Button>
            {/* </div> */}
        </Container>
    )
}