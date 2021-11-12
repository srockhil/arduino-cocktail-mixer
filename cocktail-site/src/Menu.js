import './Menu.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'



function Menu(){

    function get_drinks () {
        let drinks = {"moscow mule" : "made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime." ,
                    "espresso martini" : "cold, coffee-flavored cocktail made with vodka, espresso coffee, and coffee liqueur.",
                    "spicy margarita" : "tequila, orange liqueur, lime juice and jalapeño.",
            } // request from server


        if (Object.keys(drinks).length === 0) {
            return (
                <div className={"p-3"}>
                    <span className={"drink-text"}> Add to the menu in settings! </span> <br/>

                </div>
            )
        }

        return Object.keys(drinks).map((key)=>{
            return (
                <div className={"p-3"}>
                    <span className={"drink-name subtitle-font"}>  {key} </span>
                    <span > <Button className={"theme-btn sm blue"}> order ! </Button> </span>

                    <br/>
                    <span className={"drink-text small-font"}> {drinks[key]} </span>
                </div>
            )
        })
    }

    return (
        <div className={'paper'} >
            <Container >
                <Row className={"py-3 px-xs-1 px-md-3"} >
                    <span className={"title-font right"}> BAR </span>
                    <span className={"title-font right"}> MENU </span>
                    <span> <hr/> </span>

                    <div className={"drink-container"} >
                        {get_drinks()}
                    </div>
                </Row>
            </Container>

        </div>

    )


}

export default Menu;