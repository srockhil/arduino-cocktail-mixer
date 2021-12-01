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
import {useEffect, useState} from "react";

const CONNECT = true;

function App() {

    const [drinks, setDrinks] = useState([]);
    const [pumps, setPumps] = useState([]);

    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        requestDrinks()
        requestPumps()
    },[]);



    function savePumps (pumps) {

        if (CONNECT) {
            fetch('http://' + window.location.hostname + '/pumps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pumps)
            })
                .then((response) => response.json())
                .then(data => {
                    if (data['success']) {
                        setPumps(pumps)
                    }
                })
        }

    }

    function saveDrinks (drinks) {
        // send drink data to server, make sure its all good
        // could output an error message if things are messed up
        //then set state if everything is all good

        if (CONNECT) {
            fetch('http://' + window.location.hostname + '/drinks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(drinks)})
                .then((response) => response.json())
                .then(data => {
                    if (data['success']) {
                        setDrinks(drinks)
                    }
                })
        }
    }

    function order (drink) {

        if (CONNECT) {
            fetch('http://' + window.location.hostname + '/make-drink', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(drink)})
                .then((response) => response.json())
                .then(data => {
                    if (data['success']) {
                        setStatus("Making: " + drink['name'])
                    } else {
                        alert(data['error']);
                    }
                })
        }
    }

    function openTest () {
        window.open(document.referrer + 'test', '_self', "false")
    }


    function requestDrinks () {
        if (CONNECT) {
            // fetch('http://192.168.1.99/drinks', {
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Private-Network': true,
            //     }
            // })
            //     .then((response) => response.json())
            //     .then(data => {
            //         setDrinks(data)
            //     })
            fetch('http://' + window.location.hostname + '/drinks')
                .then((response) => response.json())
                .then(data => {
                    setDrinks(data)
                })
        } else {
            setDrinks([{name: "moscow mule",
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
                }]);
        }
    }


    function requestPumps () {
        if (CONNECT) {
            fetch('http://' + window.location.hostname + '/pumps')
                .then((response) => response.json())
                .then(data => {
                    setPumps(data)
                })
        } else {
            setPumps([
                "ginger beer",
                "vodka",
                "tequila",
                "orange juice",
                "coffee liqueur"
            ]);
        }
    }

    function updateStatus() {
        if (CONNECT) {
            fetch('http://' + window.location.hostname + '/status')
                .then((response) => response.json())
                .then(data => {
                    setStatus(data['status']);
                }).catch((error) => {
                    console.log('updateStatus error: ' + error);
            })
        } else {
            console.log('Status update');
        }
    }

    function updateStatusHelper () {
        setTimeout(() => {
            updateStatus();
            updateStatusHelper();
        }, 1000);
    }
    updateStatusHelper();



    return (
        <div className={"theme-font"}>
            <MyNav drinks={drinks} saveDrinks={saveDrinks} pumps={pumps} savePumps={savePumps} status={status}/>
            <Container>
                <Row className={"py-5"} >
                    <Col xs={2} sm={3}/>
                    <Col xs={8} sm={6}>
                        <Menu drinks={drinks} order={order}/>
                    </Col>
                    <Col xs={2} sm={3}/>

                </Row>
            </Container>
        </div>
    );



}

export default App;
