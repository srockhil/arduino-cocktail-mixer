import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Pumps from './Pumps'
import Drinks from './Drinks'




function Settings(props){


    return (
            <Tabs defaultActiveKey="pumps" className="mb-3 medium-font blue-font" >
                <Tab eventKey="pumps" title="Pumps" >
                    <Container className={"pb-2"}>
                        <Pumps hideModal={props.hideModal} pumps ={props.data.pumps}
                               savePumps={props.data.savePumps} />
                    </Container>
                </Tab>
                <Tab eventKey="drinks" title="Drinks" className={"blue-font"}>
                    <Container className={"pb-2"}>
                        <Drinks hideModal={props.hideModal} drinks ={props.data.drinks}
                                saveDrinks={props.data.saveDrinks}/>
                    </Container>
                </Tab>
            </Tabs>

    )


}

export default Settings;