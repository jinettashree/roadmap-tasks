import {Modal, Button} from 'react-bootstrap';
import { useState } from 'react';

function StyleBox(){

    const[showPopup, setShowPopup]=useState(true);

    const handleAcceptCookies=()=>{
        setShowPopup(false);
    };

    const handleDeclineCookies=()=>{
        setShowPopup(false);
    };

return(
<Modal
    show={showPopup}
    onHide={handleDeclineCookies}>
    <Modal.Header>
        <Modal.Title>Cookie Consent</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>We use cookies to improve your user experience</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="primary" onClick={handleAcceptCookies}>Accept all Cookies</Button>
        <Button variant="secondary" onClick={handleDeclineCookies}>Decline Cookies</Button>
    </Modal.Footer>
</Modal> 
);
};
export default StyleBox;