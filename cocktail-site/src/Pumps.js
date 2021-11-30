import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {MDBInput} from 'mdbreact'
import Button from 'react-bootstrap/Button'



function Pumps (props) {



    function save_pumps () {
        let new_pumps = {}
        let inputs = document.querySelectorAll('input[data-type=pump-input]')
        for (let i=0; i<inputs.length; i++){
            console.log(inputs[i])
            let key = inputs[i].getAttribute('data-label')
            let val = inputs[i].value
            new_pumps[key] = val
        }
        props.savePumps(new_pumps)
        props.hideModal()


    }

    function display_pumps () {
        if (Object.keys(props.pumps).length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"small-font left"}> There are no pumps set up yet. </span> <br/>
                </div>
            )
        }

        return Object.keys(props.pumps).map((key, i)=>{
            return (
                <Row>
                    <Col className={"primary"}>
                        <MDBInput valueDefault={props.pumps[key]} data-label={key} label={"pump " + key} data-type={"pump-input"}> </MDBInput>
                    </Col>
                </Row>
            )
        })
    }

    return (
        <>
            <Row>
                <Col className={"mx-5 px-5"}>
                    {display_pumps()}
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