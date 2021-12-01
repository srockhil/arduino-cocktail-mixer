import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal"
import { Gear } from 'react-bootstrap-icons';
import Settings from './Settings'
import { QuestionCircle } from 'react-bootstrap-icons';
import {useState} from "react";

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
                        <Nav.Link href="#features"> <QuestionCircle/> Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Modal className={"theme-font"} show={show} onHide={hideModal}>
                <Settings hideModal={hideModal} data={props}/>
            </Modal>
        </>
    )
}

export default MyNav;