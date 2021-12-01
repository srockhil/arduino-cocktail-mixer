import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {MDBInput} from 'mdbreact'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";



function Pumps (props) {

    const [pumps, setPumps] = useState(props.pumps)


    function save_pumps () {
        let new_pumps = []
        let inputs = document.querySelectorAll('input[data-type=pump-input]')
        for (let i=0; i<inputs.length; i++){
            console.log(inputs[i])
            let val = inputs[i].value
            new_pumps = new_pumps.concat(val)
        }
        props.savePumps(new_pumps)
        props.hideModal()
    }

    function add_pump(){
        setPumps((old_pumps) => [...old_pumps, 'Liquid ' + old_pumps.length])
    }

    function delete_pump(index) {
        setPumps((currPumps) => currPumps.filter((name, i) => i !== index));
    }



    function display_pumps () {
        if (pumps.length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"small-font left"}> There are no pumps set up yet. </span> <br/>
                </div>
            )
        }

        return pumps.map((val, i)=>{
            return (
                <Row key={val + i} className={"mb-2"}>
                    <Col xs={10} className={"primary"}>
                        <MDBInput valueDefault={val} label={"pump " + i} data-type={"pump-input"}> </MDBInput>
                    </Col>
                    <Col xs={2}>
                        <Button className={"bg-danger bg-opacity-50 btn-md"} onClick={() => {
                            delete_pump(i)
                        }}>
                            X
                        </Button>
                    </Col>
                </Row>
            )
        })
    }

    return (
        <>
            <Row>
                <Col className={"mx-5 mt-3 px-5"}>
                    <Row>
                        <div className={"scroll-container pt-4"} style={{margin: "auto"}}>
                            {display_pumps()}
                        </div>
                    </Row>

                    <Row>
                        <Col className={"text-center"}>
                            <Button className={"bg-success bg-opacity-50 btn-md"} onClick={add_pump}>
                                +
                            </Button>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <Container>
                <hr/>
                <Row>
                    <Col>
                        <Button className={"bg-danger bg-opacity-50"} onClick={props.hideModal}>
                            Close
                        </Button>
                        <span className={"m-1"}/>
                        <Button className={"bg-success bg-opacity-50"} onClick={save_pumps}>
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </Container>


        </>
    )


}



export default Pumps