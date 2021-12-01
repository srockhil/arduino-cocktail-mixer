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

    const [drinks, setDrinks] = useState(requestPumps())

    const [pumps, setPumps] = useState(requestDrinks());


    function savePumps (pumps) {
        const request = {
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            body: JSON.stringify(pumps)
        }


        //only set pumps upon success
        setPumps(pumps)

    }

    function saveDrinks (drinks) {
        // send drink data to server, make sure its all good
        // could output an error message if things are messed up
        //then set state if everything is all good
        setDrinks(drinks)

    }


    function requestPumps () {

        return [{name: "moscow mule",
            description: "made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime.",
            recipe: {"vodka": "1.5", "ginger beer" : "6"}
        },
        {name: "espresso martini",
            description: "cold, coffee-flavored cocktail made with vodka, espresso coffee, and coffee liqueur.",
            recipe: {"coffee liqueur" : "2", "vodka" : "1.5" }
        },
        {name: "spicy margarita",
            description: "tequila, orange liqueur, lime juice and jalapeño.",
            recipe: {"orange juice": "3", "tequila" : "1.5"}
        }]
    }


    function requestDrinks () {
        return [
            "ginger beer",
            "vodka",
            "tequila",
            "orange juice",
            "coffee liqueur"
        ]
    }



    return (
        <div className={"theme-font"}>
            <MyNav drinks={drinks} saveDrinks={saveDrinks} pumps={pumps} savePumps={savePumps} />
            <Container>
                <Row className={"py-5"} >
                    <Col xs={2} sm={3}/>
                    <Col xs={8} sm={6}>
                        <Menu drinks={drinks}/>
                    </Col>
                    <Col xs={2} sm={3}/>

                </Row>
            </Container>
        </div>
    );



}

export default App;
