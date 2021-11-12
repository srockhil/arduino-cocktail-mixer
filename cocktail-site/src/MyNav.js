import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal"
import { Gear } from 'react-bootstrap-icons';
import Settings from './Settings'
import { QuestionCircle } from 'react-bootstrap-icons';
import './MyNav.css';
import {useState} from "react";

function MyNav() {

    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);

    const hideModal = () => setShow(false);

    return (
        <>
            <Navbar className={"blue rounded medium-font"} variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"> <img className={'img-fluid-small'}
                                                     src={"./cocktail-polka-dots-stroke-by-Vexels.png"} alt={'Logo'}/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={showModal}> <Gear/> Settings</Nav.Link>
                        <Nav.Link href="#features"> <QuestionCircle/> Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Modal show={show} onHide={hideModal}>
                <Settings hide={hideModal}/>
            </Modal>
        </>
    )
}

export default MyNav;