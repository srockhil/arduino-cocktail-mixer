import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {MDBInput} from "mdbreact";

function Drinks (props) {


    function delete_drink (index) {
        let row = document.querySelector('div[data-drink-index=\"drink'+ index + '\"]')
        row.parentElement.removeChild(row)
    }

    function save_drinks () {
        let new_drinks = {}
        let rows = document.querySelectorAll('div[data-type=drink-row]')
        for (let i=0;i<rows.length;i++){
            let name = rows[i].querySelector('div[data-type=drink-name]').getAttribute("data-value")
            let ingredients_divs = rows[i].querySelectorAll('div[data-type=drink-ingredients]')
            let ingredients = {}
            for (let i=0;i<ingredients_divs.length;i++){
                let ingredient_name = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-name]').value
                let ingredient_amount = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-amount]').value
                ingredient_amount = ingredient_amount.split(" ")[0]
                ingredients[ingredient_name] = ingredient_amount
            }
            let description = rows[i].querySelector('div[data-type=drink-description]').querySelector("textarea").value
            new_drinks[name] = [description, ingredients]

        }
        props.saveDrinks(new_drinks)
        props.hideModal()
    }

    function display_drinks () {
        if (Object.keys(props.drinks).length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"small-font left text-black"}> There are no drinks set up yet. </span> <br/>
                </div>
            )
        }
        return Object.keys(props.drinks).map((key, i)=>{
            return (
                <Row data-drink-index={'drink' + i} data-type={'drink-row'} className={"small-font theme-font text-black pt-1 pb-3"}>
                    <Col xs={3} data-type={'drink-name'} data-value={key}>
                        {key}
                        <br/>
                        <Button className={"d-sm-none bg-danger bg-opacity-50 btn-md"} onClick={()=> {delete_drink(i)}}>
                            X
                        </Button>
                    </Col>
                    <Col xs={4}  >
                        {Object.keys(props.drinks[key][1]).map((drink, i)=>{
                            return(
                                <Row data-type={"drink-ingredients"}>
                                    <Col xs={8} className={"small-col"}>
                                        <MDBInput className={"small-input"} valueDefault={drink} data-label={i}
                                                  data-type={"drink-ingredient-name"}/>
                                    </Col>
                                    <Col xs={4} className={"small-col"}>
                                        <MDBInput className={"small-input right"}
                                                  valueDefault={props.drinks[key][1][drink] + " oz"}
                                                  data-label={i} data-type={"drink-ingredient-amount"}>
                                        </MDBInput>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col xs={5} sm={4} data-type={"drink-description"}>
                        <textarea className={"theme-font small-font"} style={{width: "100%", height : "100%"}}>{props.drinks[key][0]}</textarea>
                    </Col>
                    <Col sm={1} className={"px-2 d-none d-sm-block"}>
                        <Button className={"bg-danger bg-opacity-50 btn-md"} onClick={()=> {delete_drink(i)}}>
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
                <Col className={"mx-2 px-md-3 px-xs-1"  }>
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