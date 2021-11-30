import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu'
import MyNav from './MyNav'


import './App.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import './theme.scss';
import {useState} from "react";



function App() {

    const [drinks, setDrinks] = useState({
        "moscow mule" : ["made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime.",
            {"vodka": "1.5", "ginger beer" : "6"}] ,
        "espresso martini" : ["cold, coffee-flavored cocktail made with vodka, espresso coffee, and coffee liqueur.",
            {"coffee liqueur" : "2", "vodka" : "1.5" }],
        "spicy margarita" : ["tequila, orange liqueur, lime juice and jalapeño.",
            {"orange juice": "3", "tequila" : "1.5"}],

    });
    const [pumps, setPumps] = useState({
        "1": "ginger beer",
        "2": "vodka",
        "3": "tequila",
        "4": "orange juice",
        "5": "coffee liqueur" });

    return (
        <div className={"theme-font"}>
            <MyNav drinks={drinks} setDrinks={setDrinks} pumps={pumps} setPumps={setPumps} />
            <Container>
                <Row className={"py-5"} >
                    <Col xs={1} />
                    <Col md={6} xs={10}>
                        <Menu drinks={drinks}/>
                    </Col>
                    <Col md={5} xs={1}> </Col>
                </Row>
            </Container>
        </div>
    );



}

export default App;