import './Menu.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'



function Menu(props){

    function display_drinks () {
        if (Object.keys(props.drinks).length === 0){
            return (
                <div className={"p-3"}>
                    <span className={"small-font left"}> Add to the menu in settings!</span> <br/>
                </div>
            )}
        return Object.keys(props.drinks).map((key)=>{
            return (
                <div className={"p-3"}>
                    <span className={"subtitle-font"}>{key} </span>
                    <span> <Button className={" bg-primary bg-opacity-50 btn-sm"}> order ! </Button> </span>
                    <br/>
                    <span className={"small-font"}> {props.drinks[key][0]} </span>
                </div>
            )
        })
    }

    return (
        <div className={'paper menu'} >
            <Container>
                <Row className={"py-3 px-xs-1 px-md-3"} >
                    <span className={"title-font right"}> BAR </span>
                    <span className={"title-font right"}> MENU </span>
                    <span> <hr/> </span>
                    <div className={"drink-container"} >
                        {display_drinks()}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Menu;