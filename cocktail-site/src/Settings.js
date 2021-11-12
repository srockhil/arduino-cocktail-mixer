import './Settings.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function Settings(props){


    let handleClose = () => {
        alert("hello")
        props.hide()
    }


    return (
        <Container>
            <Modal.Header  >
                 <span className={'title-font'}> Update Machine  </span>
            </Modal.Header>
            <Modal.Body> Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button className={"theme-btn md white"} onClick={handleClose}>
                    Close
                </Button>
                <Button className={"theme-btn md blue"} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Container>


    )


}

export default Settings;