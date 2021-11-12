import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Gear } from 'react-bootstrap-icons';
import { QuestionCircle } from 'react-bootstrap-icons';

import './MyNav.css';

function MyNav(){



    return (
        <Navbar className={"blue rounded"} variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home"> <img className={'img-fluid-small'} src={"./cocktail-polka-dots-stroke-by-Vexels.png"}/> </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"> <Gear/> Settings</Nav.Link>
                    <Nav.Link href="#features"> <QuestionCircle/> Help</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )


}

export default MyNav;