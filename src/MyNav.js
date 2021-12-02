import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal"
import { Gear } from 'react-bootstrap-icons';
import Settings from './Settings'
import { QuestionCircle } from 'react-bootstrap-icons';
import {useState} from "react";
import {Alert, Button, Row, ButtonGroup} from "react-bootstrap";

function MyNav(props) {

    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);

    const hideModal = () => setShow(false);

    return (
        <>
            <Navbar className={"medium-font bg-primary bg-opacity-50"} bg- variant="primary" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"> <img className={'img-fluid-small'}
                                                     src={"./cocktail-polka-dots-stroke-by-Vexels.png"} alt={'Logo'}/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={showModal}> <Gear/> Settings</Nav.Link>
                        <Nav.Link> <QuestionCircle/> Help</Nav.Link>
                    </Nav>
                    <Alert className="alert-primary">
                        <Row>
                            <h4>Status: {props.status}</h4>
                        </Row>
                        <Row>
                            {/*<ButtonGroup size="sm">*/}
                            {/*    <Button variant="primary" className={props.autoUpdateStatus && 'active'} onClick={() => props.setAutoUpdateStatus(true)}>Auto</Button>*/}
                            {/*    <Button variant="primary" className={!props.autoUpdateStatus && 'active'} onClick={() => props.setAutoUpdateStatus(false)}>Off</Button>*/}
                            {/*</ButtonGroup>*/}
                            <Button size="sm" onClick={() => props.updateStatus(false)}>Refresh</Button>
                        </Row>
                    </Alert>
                </Container>
            </Navbar>


            <Modal className={"theme-font"} show={show} onHide={hideModal}>
                <Settings hideModal={hideModal} data={props}/>
            </Modal>
        </>
    )
}

export default MyNav;