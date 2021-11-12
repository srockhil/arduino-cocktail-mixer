import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu'
import MyNav from './MyNav'


import './App.css';
import './theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className={"bg"}>
            <MyNav/>
            <Container>

                <Row className={"py-5"} >
                    <Col xs={1} />
                    <Col md={6} xs={10}>
                        <Menu/>
                    </Col>
                    <Col md={5} xs={1}> </Col>
                </Row>


            </Container>
        </div>
    );



}

export default App;
