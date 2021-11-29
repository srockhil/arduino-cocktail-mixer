import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {MDBInput} from "mdbreact";

function Drinks (props) {

    function save_drinks () {
        let new_drinks = {}
        let inputs = document.querySelectorAll('input')
        for (let i=0; i<inputs.length; i++){
            console.log(inputs[i])
            let key = inputs[i].getAttribute('data-label')
            let val = inputs[i].value
            if (val === ""){
                val = inputs[i].placeholder
            }
            new_drinks[key] = val
        }
        props.setDrinks(new_drinks)
        props.hideModal()
    }

    function display_drinks () {
        console.log(props.drinks)
        if (Object.keys(props.drinks).length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"small-font left"}> There are no drinks set up yet. </span> <br/>
                </div>
            )
        }
        return Object.keys(props.drinks).map((key, i)=>{
            return (
                <Row className={"small-font theme-font text-black py-1"}>
                    <Col xs={3} >
                        {key}
                        <br/>
                        <Button className={"d-sm-none bg-danger bg-opacity-50 btn-md"} onClick={props.hideModal}>
                            X
                        </Button>
                    </Col>
                    <Col xs={4} >
                        {Object.keys(props.drinks[key][1]).map((drink, i)=>{
                            return(
                                <Row>
                                    <Col>
                                        <MDBInput hint={drink} data-label={i} data-type={"name"}> </MDBInput>
                                    </Col>
                                    <Col>
                                        <MDBInput hint={props.drinks[key][1][drink] + " oz"} data-label={i} data-type={"amount"}> </MDBInput>
                                    </Col>
                                </Row>
                            )

                        })}
                    </Col>
                    <Col xs={5} sm={4} >
                        <textarea className={"theme-font small-font"} style={{width: "100%", height : "100%"}}>{props.drinks[key][0]}</textarea>

                    </Col>
                    <Col sm={1} className={"px-2 d-none d-sm-block"}>
                        <Button className={"bg-danger bg-opacity-50 btn-md"} onClick={props.hideModal}>
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
                <Col className={"mx-2 px-md-5 px-xs-1"  }>
                    <Row className={"small-font theme-font text-black text-center"}>
                        <Col xs={3}> NAME </Col>
                        <Col xs={4}> RECIPE </Col>
                        <Col xs={5} sm={4}> DESCRIPTION</Col>
                        <Col sm={1} className={"d-none d-sm-block"}/>
                    </Row>
                    <hr/>
                    {display_drinks()}
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
                        <Button className={"bg-success bg-opacity-50"} onClick={save_drinks}>
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </Container>


        </>
    )


}



export default Drinks