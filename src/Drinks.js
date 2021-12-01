import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react';
import {MDBInput} from "mdbreact";

function Drinks (props) {


    const [drinks, setDrinks] = useState(props.drinks)


    function delete_drink (index) {
        setDrinks((currDrinks) => currDrinks.filter((name, i) => i !== index));

    }

    function add_ingredient (index) {
        let new_drinks = find_drinks()
        new_drinks[index].recipe['-'] = "-"
        setDrinks(new_drinks)
    }


    function add_drink () {
        let drink_num = drinks.length + 1
        let new_drink = {name: "new drink " + drink_num + "!",
            description: "description",
            recipe: {"-" : "-"}}

        setDrinks((old_drinks) => [...old_drinks, new_drink])
    }

    function find_drinks () {
        let new_drinks = []
        let rows = document.querySelectorAll('div[data-type=drink-row]')
        for (let i=0;i<rows.length;i++){
            let name = rows[i].querySelector('div[data-type=drink-name]').querySelector("textarea").value
            let ingredients_divs = rows[i].querySelectorAll('div[data-type=drink-ingredients]')
            let ingredients = {}
            for (let i=0;i<ingredients_divs.length;i++){
                let ingredient_name = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-name]').value
                let ingredient_amount = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-amount]').value
                ingredient_amount = ingredient_amount.split(" ")[0]
                ingredients[ingredient_name] = ingredient_amount
            }
            let description = rows[i].querySelector('div[data-type=drink-description]').querySelector("textarea").value
            let drink = {name : name, description: description, recipe : ingredients}
            new_drinks = new_drinks.concat(drink)

        }
        return new_drinks

    }

    function save_drinks () {
        let new_drinks = []
        let rows = document.querySelectorAll('div[data-type=drink-row]')
        for (let i=0;i<rows.length;i++){
            let name = rows[i].querySelector('div[data-type=drink-name]').querySelector("textarea").value
            let ingredients_divs = rows[i].querySelectorAll('div[data-type=drink-ingredients]')
            let ingredients = {}
            for (let i=0;i<ingredients_divs.length;i++){
                let ingredient_name = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-name]').value
                let ingredient_amount = ingredients_divs[i].querySelector('input[data-type=drink-ingredient-amount]').value
                ingredient_amount = ingredient_amount.split(" ")[0]
                ingredients[ingredient_name] = ingredient_amount
            }
            let description = rows[i].querySelector('div[data-type=drink-description]').querySelector("textarea").value
            let drink = {name : name, description: description, recipe : ingredients}
            new_drinks = new_drinks.concat(drink)

        }
        props.saveDrinks(new_drinks)
        props.hideModal()
    }

    function display_drinks () {
        if (drinks.length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"small-font left text-black"}> There are no drinks set up yet. </span> <br/>
                </div>
            )
        } else {
            return drinks.map((drink, i) => {
                return (
                    <Row key={drink.name+i} data-drink-index={'drink' + i} data-type={'drink-row'}
                         className={"small-font theme-font text-black pt-1 pb-3"}>
                        <Col xs={3} data-type={"drink-name"} className={"mr-0"}>
                        <textarea className={"theme-font small-font half"} defaultValue={drink.name}/>
                            <br/>
                            <Button className={"d-sm-none bg-danger bg-opacity-50 btn-md"} onClick={() => {
                                delete_drink(i)
                            }}>
                                X
                            </Button>
                        </Col>
                        <Col xs={4}>
                            {Object.keys(drink.recipe).map((ingredient, ii) => {
                                return (
                                    <Row key={drink.recipe.name + ii} data-type={"drink-ingredients"}>
                                        <Col xs={8} className={"small-col"}>
                                            <MDBInput className={"small-input"} valueDefault={ingredient}
                                                      data-type={"drink-ingredient-name"}/>
                                        </Col>
                                        <Col xs={4} className={"small-col"}>
                                            <MDBInput className={"small-input right"}
                                                      valueDefault={drink.recipe[ingredient] + " oz"}
                                                      data-type={"drink-ingredient-amount"}>
                                            </MDBInput>
                                        </Col>
                                    </Row>
                                )
                            })}
                            <Row>
                                <Col className={"text-center"}>
                                    <Button className={"bg-primary bg-opacity-50 btn-sm"} onClick={() => add_ingredient(i)}>
                                        +
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={5} sm={4} data-type={"drink-description"}>
                            <textarea className={"theme-font small-font full"} defaultValue={drink.description}/>
                        </Col>
                        <Col sm={1} className={"px-0 d-none d-sm-block"}>
                            <Button className={"bg-danger bg-opacity-50 btn-md"} onClick={() => {
                                delete_drink(i)
                            }}>
                                X
                            </Button>
                        </Col>
                        <hr/>
                    </Row>
                )
            })
        }
    }


    return (
        <>
            <Row>
                <Col className={"mx-2 mx-sm-1 px-md-3 px-xs-1" }>
                    <Row className={"small-font theme-font text-black text-center"}>
                        <Col xs={3}> NAME </Col>
                        <Col xs={4}> RECIPE </Col>
                        <Col xs={5} sm={4}> DESCRIPTION</Col>
                        <Col sm={1} className={"d-none d-sm-block"}/>
                    </Row>
                    <hr/>
                    <div className={"scroll-container drinks"}>
                        {display_drinks()}
                    </div>
                    <Row>
                        <Col className={"text-center"}>
                            <Button className={"bg-success bg-opacity-50 btn-md"} onClick={add_drink}>
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